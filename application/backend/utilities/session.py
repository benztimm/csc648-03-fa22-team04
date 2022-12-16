'''
Date: 12/03/22
Developers: Sudhanshu Kulkarni
Description: Methods for session management.
'''

import configparser
import pickle
import time

# Read the configurations from external file:
config_parser = configparser.ConfigParser()
config_parser.read("utilities/config.ini")

session_timeout = int(config_parser["session"]["timeout"])
session_dict = {}


def enter_session(user_id):
    """
    Creates a new session for the user. (Log in)
    `input` user_id
    """
    # Use pickled session data:
    f = open("utilities/session.dat", "rb")
    session_dict = pickle.load(f)

    session_dict[user_id] = int(time.time())

    f = open("utilities/session.dat", "wb")
    pickle.dump(session_dict, f)
    f.close()


def exit_session(user_id):
    """
    Removes an active session of the user. (Log out)
    `input` user_id
    """

    # Use pickled session data:
    f = open("utilities/session.dat", "rb")
    session_dict = pickle.load(f)

    session_dict[user_id] = 0

    f = open("utilities/session.dat", "wb")
    pickle.dump(session_dict, f)
    f.close()


def has_valid_session(user_id):
    """
    Checks if user has a valid session. If yes, sets the latest timestamp.
    `input` user_id
    `return` True / False
    """
    # Use pickled session data:
    f = open("utilities/session.dat", "rb")
    session_dict = pickle.load(f)

    if user_id in session_dict and int(time.time()) - session_dict.get(user_id, 0) <= session_timeout:
        session_dict[user_id] = int(time.time())

        f = open("utilities/session.dat", "wb")
        pickle.dump(session_dict, f)
        f.close()

        return True
    else:
        return False

def update_session(user_id):
    """
    Sets the latest timestamp.

    `input` user_id
    `return` True / False
    """
    # Use pickled session data:
    f = open("utilities/session.dat", "rb")
    session_dict = pickle.load(f)

    session_dict[user_id] = int(time.time())

    f = open("utilities/session.dat", "wb")
    pickle.dump(session_dict, f)
    f.close()
