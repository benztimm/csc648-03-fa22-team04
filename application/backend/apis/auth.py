'''
Date: 11/27/22
Developers: Jerry Liu
Description: Register user to database; Authorize user login
'''

import utilities.db_helper as db
from flask import request, session
from utilities import cryptography_helper as fernet


def register():
    try:
        _json = request.json
        _firstname = _json['firstname']
        _lastname = _json['lastname']
        _email = _json['email']
        _password = _json['password']
        # validate the received values
        if _firstname and _lastname and _email and _password and request.method == 'POST':
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
        _json = request.json
        _email = _json['email']
        _password = _json['password']
        if _email and _password and request.method == 'POST':
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
                session['logged'] = True
                session['email'] = auth_email['email']
                # Redirect to home page
                return 'Logged in successfully!'
            else:
                print(f"Incorrect username or password")
    except Exception as e:
        print(f"Incorrect username or password  \n{e}")
        raise Exception("Something went wrong with the login.")