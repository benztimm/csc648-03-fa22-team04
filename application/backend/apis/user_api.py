'''
Date: 11/20/22
Developers: Ekarat Buddharuksa, Jerry Liu
Description: All APIs related to Users.
'''

import utilities.db_helper as db
from utilities import cryptography_helper as fernet
import routes as routes

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


def register():
    try:
        _firstname, _lastname, _email, _password = routes.register_request
        # do not save password as a plain text
        encrypted_password = fernet.encrypting_function(_password)
        # save edits
        query = "INSERT INTO user(user_firstname, user_lastname, user_email, user_password) VALUES(%s, %s, %s, %s)"
        data = (_firstname, _lastname, _email, encrypted_password)
        db.execute_query(query, data)
        return 'Registration successful'
    except Exception as e:
        print(f"Error registering user : \n{e}")
        raise Exception("Something went wrong while registering user.")


def login():
    try:
        _email, _password = routes.login_request
        # find email from user input
        query1 = """
            SELECT
                u.user_email as 'user_email'
            FROM 
                user u
            WHERE
                user_email = %(user_email)s
            """
        # find encrypted password from user email
        query2 = """
            SELECT 
                u.user_password as 'user_password'
            FROM
                user u 
            WHERE
                user_email = %(user_email)s
            """
        data = _email
        auth_email = db.execute_query(query1, data)
        auth_password = db.execute_query(query2, data)
        # check if user input matches stored email and decoded password
        decrypted_password = fernet.decrypting_function(auth_password)
        if _email == auth_email and _password == decrypted_password:
            return 'Logged in successfully!'
        else:
            print(f"Incorrect username or password")
    except Exception as e:
        print(f"Error logging in user :  \n{e}")
        raise Exception("Something went wrong with the login.")