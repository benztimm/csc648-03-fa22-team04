'''
Date: 11/20/22
Developers: Ekarat Buddharuksa, Jerry Liu
Description: All APIs related to Users.
'''

import utilities.db_helper as db
from utilities import cryptography_helper as fernet
import routes as routes
import traceback

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


def login(email, password):
    """
    Login user.

    `input` credentials
    
    `return` success / fail message
    """
    if not email or not password:
        return 'Missing Credentials.'

    try:
        # find email from user input
        query1 = """
                    SELECT
                        u.email as 'user_email'
                    FROM 
                        user u
                    WHERE
                        email = %(user_email)s
                """
        # find encrypted password from user email
        query2 = """
                    SELECT 
                        u.password as 'user_password'
                    FROM
                        user u 
                    WHERE
                        email = %(user_email)s
                """

        auth_email = db.execute_query(query1, {"user_email": email})[0]
        auth_password = db.execute_query(query2, {"user_email": email})[0]

        # check if user input matches stored email and decoded password
        # decrypted_password = fernet.decrypting_function(auth_password.get("user_password"))

        
        if email == auth_email.get("user_email") and password == auth_password.get("user_password"):
            return 'Login Successfully!'
        else:
            print(f"Incorrect Credentials: {email} == {auth_email} | {password} == {auth_password}")
            return 'Login Unsuccessful!'

    except BaseException as e:
        traceback.print_exc()
        raise Exception(f"{repr(e)}\nError: user_api.login")
