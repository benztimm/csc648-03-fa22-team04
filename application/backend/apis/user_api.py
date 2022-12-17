'''
Date: 11/20/22
Developers: Ekarat Buddharuksa, Jerry Liu
Description: All APIs related to Users.
'''

import utilities.db_helper as db
import routes as routes
import traceback
import utilities.session as session


def delete_user(user_id = None):
    """
    Delete specific post
    `input` user_id : unique post ID
    `return` status in JSON format
        if success return 'Success'
        if fail return 'Fail'
    """
    query_select = """ SELECT * FROM user """
    query_delete = """DELETE FROM user WHERE user_id = """
    user_id= (str(user_id))

    if user_id:
        query_delete += user_id
    row_count_before = db.execute_query_rowcount(query_select)
    db.execute_query(query_delete)
    row_count_after = db.execute_query_rowcount(query_select)
    status = 'Success' if row_count_after == row_count_before-1 else 'Fail'
    results = {'status':status}
    return results


def get_email(user_id=None):
    query = """
    SELECT 
        u.user_id as 'user_id',
        u.user_email as 'user_email' 
    FROM 
        user u
    WHERE
        user_id = %(user_id)s

        """
    results = db.execute_query(query=query, params={"user_id": user_id})

    for user_email in results:
        try:
            return user_email
        except Exception as e:
            print(f"Error loading file for user <{user_email.get('user_id')}> : \n{e}")
            raise Exception("Something went wrong while loading user.")


def register(first_name, last_name, email, password):
    """
    Register a new user into the system.

    `input` firstname, lastname, email & password

    `return` success / fail message
    """

    if not first_name or not last_name or not email or not password:
        return "Missing data."

    try:
        # do not save password as a plain text
        # encrypted_password = fernet.encrypting_function(password)
        encrypted_password = password

        # save edits
        query = "INSERT INTO user(first_name, last_name, email, password) VALUES(%s, %s, %s, %s)"
        data = (first_name, last_name, email, encrypted_password)
        db.execute_query(query, data)
        return 'Registration successful'

    except Exception as e:
        print(f"Error registering user : \n{e}")
        raise Exception("Something went wrong while registering user.")


def login(email):
    """
    Login user.

    `input` credentials

    `return` success / fail message
    """

    # find email from user input
    query1 = """
                SELECT
                    first_name,
                    email,
                    user_id,
                    password
                FROM 
                    user u
                WHERE
                    email = %(email)s
            """

    user = db.execute_query(query1, {"email": email})
    return user


def update_password(email, password):
    """
    Update password

    `input` credentials

    `return` success / fail message
    """

    try:
        query1 = """
                    UPDATE
                        user
                    SET
                        password = %(password)s
                    WHERE
                        email = %(email)s
                """

        db.execute_query(query1, {"email": email, 'password': password})
        return True
    except Exception as e:
        traceback.print_exc()
        return False


def get_user_post(uploader_id = None):
    """
    Get details of a user specific post

    `input` uploader_id : unique uploader_id

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
                    p.uploader_id = %(uploader_id)s
            """

    # Update query with where clause with post_id provided:
    results = db.execute_query(query=query, params={"uploader_id": uploader_id})

    for post in results:
        try:
            # read the file and send static URL:
            if post['post_type'] == "Document":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/document.png'
            elif post['post_type'] == "Audio":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/audio.png'
            elif post['post_type'] == "Video":
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/video.png'
            else:    
                post['thumbnail'] = f'http://54.200.101.218:5000/thumbnails/{post["file"]}'
            
            post['file'] = f'http://54.200.101.218:5000/post/{post["file"]}'
        except Exception as e:
            print(f"Error loading file for post <{post.get('post_id')}> : \n{e}")
            raise Exception("Something went wrong while loading file.")

    return results

def logout(user_id):
    try:
        session.exit_session(user_id)
    except BaseException as e:
        traceback.print_exc()
        raise Exception(f"{repr(e)}\nError: user_api.logout")
