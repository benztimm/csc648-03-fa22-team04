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
            file = open(post.get("file"), 'rb')
            post['file'] = b64encode(file.read()).decode()
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results
