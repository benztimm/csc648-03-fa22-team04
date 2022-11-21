import utilities.db_helper as db
from base64 import b64encode

def search_posts(keyword = None):
    """
    Searches all matching media from database

    `input` keyword [optional]: find media with mathcing title, description or category

    `return` JSON of all matching entries
    """
    query = """
                SELECT
                    p.*,
                    CONCAT(u.first_name, ' ', u.last_name) as 'uploader_name'
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


def get_latest_posts(limit = None):
    query = """
                SELECT
                    p.*,
                    CONCAT(u.first_name, ' ', u.last_name) as 'uploader_name'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                ORDER BY post_id desc
                limit 
            """
    if limit:
        limit = (str(limit))
        query += limit
    results = db.execute_query(query=query)

    for post in results:
        try:
            # read the file and send static URL:
            post['file'] = f'http://54.200.101.218:5000/post/{post["file"]}'
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results


def get_post_details(post_id = None):
    """
    Get details of a specific post

    `input` post_id : unique post ID

    `return` JSON of all details of that
    """
    query = """
                SELECT
                    p.*,
                    CONCAT(u.first_name, ' ', u.last_name) as 'uploader_name'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                WHERE
                    post_id = %(post_id)s
            """

    # Update query with where clause with post_id provided:
    results = db.execute_query(query=query, params={"post_id": post_id})

    for post in results:
        try:
            # read the file and send static URL:
            post['file'] = f'http://54.200.101.218:5000/post/{post["file"]}'
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results

def delete_post(post_id = None):
    """    
    Delete specific post

    `input` post_id : unique post ID

    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query_select = """ SELECT * FROM post """
    query_delete = """DELETE FROM post WHERE post_id = """
    post_id= (str(post_id))

    if post_id:
        query_delete += post_id
    row_count_before = db.execute_query_rowcount(query_select)
    db.execute_query(query_delete)
    row_count_after = db.execute_query_rowcount(query_select)
    status = 'Success' if row_count_after == row_count_before-1 else 'Fail'
    results = {'status':status}
    return results