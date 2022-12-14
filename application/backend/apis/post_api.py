'''
Date: 11/15/22
Developers: Sudhanshu Kulkarni, Ekarat Buddharuksa
Description: All APIs related to Posts.
'''

import utilities.db_helper as db

def search_posts(keyword = None,category = None,type = None):
    """
    Searches all matching media from database

    `input` keyword [optional]: find media with mathcing title, description or category

    `return` JSON of all matching entries
    """
    query = """
                SELECT
                    p.*,
                    u.first_name as 'uploader_name',
                    c.category_name as 'category_name',
                    u.user_id as 'uploader_id',
                    c.category_id as 'category_id'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                JOIN
                    category c
                ON
                    p.category = c.category_id
                WHERE
                    p.approved = 'Approved'
            """
    # Update query with where clause in case search keyword provided:
    if keyword:
        query += """
                    AND (p.title LIKE %(keyword)s
                    OR p.description LIKE %(keyword)s
                    OR c.category_name LIKE %(category)s
                    )
                """
    if  category:
        query+= """
                    AND (c.category_name LIKE %(category)s)
                """
    if  type:
        query+= """
                    AND (p.post_type LIKE %(type)s)
                """
    results = db.execute_query(query=query, params={
        "keyword": "%" + keyword + "%" if keyword else keyword,
        "category": "%" + category + "%" if category else category,
        "type": "%" + type + "%" if type else type
        })

    for post in results:
        try:
            # read the file and send static URL:
            if post['post_type'] == "Document":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/document.png'
            elif post['post_type'] == "Audio":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/audio.png'
            else:    
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/{post["file"]}'
            
            post['file'] = f'http://54.200.101.218:5000/post/{post["file"]}'
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results


def get_latest_posts(limit = 1):
    """
    Home page API, get latest x posts sorted on time

    `input` limit: how many posts to return (default 1)

    `return` JSON of all matching entries
    """
    query = """
                SELECT
                    p.*,
                    u.first_name as 'uploader_name',
                    c.category_name as 'category_name',
                    u.user_id as 'uploader_id',
                    c.category_id as 'category_id'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                JOIN
                    category c
                ON
                    p.category = c.category_id
                WHERE
                    p.approved = 'Approved'
                ORDER BY
                    post_id desc
                LIMIT 
            """
    query += str(limit)
    results = db.execute_query(query=query)

    for post in results:
        try:
            # read the file and send static URL:
            if post['post_type'] == "Document":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/document.png'
            elif post['post_type'] == "Audio":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/audio.png'
            else:    
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/{post["file"]}'
            
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
                    u.first_name as 'uploader_name',
                    c.category_name as 'category_name',
                    u.user_id as 'uploader_id',
                    c.category_id as 'category_id'
                FROM
                    post p
                JOIN
                    user u
                ON
                    p.uploader_id = u.user_id
                join
                    category c
                on
                    p.category = c.category_id
                WHERE
                    post_id = %(post_id)s
            """

    # Update query with where clause with post_id provided:
    results = db.execute_query(query=query, params={"post_id": post_id})

    for post in results:
        try:
            # read the file and send static URL:
            if post['post_type'] == "Document":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/document.png'
            elif post['post_type'] == "Audio":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/audio.png'
            else:    
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/{post["file"]}'
            
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

def upload_post(uploader_id = None, post_type = None, title = None, file = None, description = None, price = None, category = None):
    """
    Insert new upload to post table

    `input` 
        uploader_id : unique uploader ID
        post_type : file type eg. Image, Document
        title : post title
        file : file name — use in both file and thumbnail
        description : post description
        price : media price
        category : media category. *integer*

    `return` Success or Failed
    """
    try:
        query_select = """ SELECT * FROM post """
        query = """
                insert into post
                (uploader_id,post_type,title,file,thumbnail,description,price,approved,category)
                values 
                (%(uploader_id)s,%(post_type)s,%(title)s,%(file)s,%(file)s,%(description)s,%(price)s,'Approved',%(category)s);
                """

        row_count_before = db.execute_query_rowcount(query_select)
        db.execute_query(query=query, params={
            "uploader_id": uploader_id if uploader_id else uploader_id,
            "post_type": post_type if post_type else post_type,
            "title": title if title else title,
            "file": file if file else file,
            "description": description if description else description,
            "price": price if price else price,
            "category": category if category else category  
            })
        row_count_after = db.execute_query_rowcount(query_select)
        status = 'Success' if row_count_after == row_count_before+1 else 'Fail'
        results = {'status':status}
        return results

    except Exception as e:
        print(f"Error in post_api : upload_post user : \n{e}")
        raise Exception("Something went wrong while uploading a new post.")