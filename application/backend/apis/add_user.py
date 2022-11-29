'''
Date: 11/27/22
Developers: Jerry Liu
Description: Add user data to database from registration, secured password still in development
'''

import utilities.db_helper as db
from flask import request
# from werkzeug.security import generate_password_hash, check_password_hash


def add_user():
    try:
        _json = request.json
        _firstname = _json['firstname']
        _lastname = _json['lastname']
        _email = _json['email']
        _password = _json['password']
        # validate the received values
        if _firstname and _lastname and _email and _password and request.method == 'POST':
            # do not save password as a plain text
            #_hashed_password = generate_password_hash(_password)
            # save edits
            query = "INSERT INTO user(user_firstname, user_lastname, user_email, user_password) VALUES(%s, %s, %s, %s)"
            data = (_firstname, _lastname, _email, _password,)
            db.execute_query(query, data)
    except Exception as e:
        print(f"Error loading file for user <{add_user()}> : \n{e}")
        raise Exception("Something went wrong while loading user.")


"""
def password(self, _password):
    self.password_hash = generate_password_hash()


def verify_password(self, _password):
    return check_password_hash(self.password_hash, _password)
"""