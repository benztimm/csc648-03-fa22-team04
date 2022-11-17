import utilities.db_helper as db
from base64 import b64encode

def search_media(keyword = None):
    """
    Searches all matching media from database

    `input` keyword [optional]: find media with mathcing title, description or category

    `return` JSON of all matching entries
    """
    query = """
                SELECT
                    p.*,
                    u.first_name as 'uploader_name',
                    u.user_id as 'uploader_id'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                """
    # Update query with where clause in case search keyword provided:
    if keyword:
        query += """
                WHERE
                    p.title LIKE %(keyword)s
                    OR p.description LIKE %(keyword)s
                    OR p.category LIKE %(keyword)s
                """
    results = db.execute_query(query=query, params={"keyword": "%" + keyword + "%" if keyword else keyword})

    for post in results:
        try:
            # read the file and send static URL:
            post['file'] = f'http://54.200.101.218:5000/post/{post["file"]}'
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results
