'''
Date: 11/12/22
Developers: Sudhanshu Kulkarni, Ekarat Buddharuksa
Description: Routing page to handle all requests inbound to backend API
'''

from flask import jsonify, send_file, request
from root import app
import json
from os import path

import apis.post_api as post_api
import apis.user_api as user_api
import apis.message_api as message_api


@app.route("/")
def hello():
    return "<h1 style='color:black'>CSC 648 - Team 4!</h1>"


@app.route('/data', methods=['GET'])
def data():
    '''
    TEST FUNCTION
    :return: Json format of random data
    '''
    # file_name = r"D:\Masters\SE\csc648-03-fa22-team04\application\base_resources\CSC-648-team4-git_flow.png"

    # file = open(file_name, 'rb')
    # file_data = b64encode(file.read()).decode()
    # response = send_file(file_name, mimetype='image/png')
    # response.headers["additional_data"] = {'data': "Some additional data"}
    return jsonify({"data": "Some random data."}), 200


@app.route('/data-parameters', defaults={'x': 'FLASK'})
@app.route('/data-parameters/<x>')
def data_parameters(x=None):
    '''
    TEST FUNCTION WITH PARAMETERS
    :input: x - anything
    :return: JSON format of input
    '''
    return json.dumps({'output': x, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/search-posts/', defaults={'keyword': None})
@app.route('/search-posts/<keyword>')
def search_posts(keyword=None):
    '''
    Search posts based on keywords. The keyword will be searched on title, description and category.
    `inputs` keyword - input string
    `returns` query output
    '''
    try:
        output = post_api.search_posts(keyword = keyword)
    except Exception as e:
        print(f"== EXCEPTION == search_posts: \n{e}")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/get-post-details/', defaults={'post_id': 1})
@app.route('/get-post-details/<post_id>')
def get_post_details(post_id=1):
    '''
    Search posts based on keywords. The keyword will be searched on title, description and category.
    `inputs` keyword - input string
    `returns` query output
    '''
    try:
        output = post_api.get_post_details(post_id=post_id)
    except Exception as e:
        print(f"== EXCEPTION == get_post_details: \n{e}")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/home-page/', defaults={'limit': 10})
@app.route('/home-page/<limit>')
def get_latest_post(limit=None):
    '''
    Get latest post in post table default = 10
    `inputs` limit - input string then change to int *prevent sql injection*
    `returns` query output
    '''
    try:
        limit = (int(limit))
        output = post_api.get_latest_posts(limit = limit)
    except Exception as e:
        print(f"== EXCEPTION == get_latest_post: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/post/', defaults={'post_name': None})
@app.route('/post/<post_name>')
def static_post(post_name=None):
    '''
    Serve the image from server's file system.
    `inputs` image_path: path to image
    `returns` static image
    '''
    try:
        file_name = path.abspath(f"../../posts/{post_name}")
        return send_file(file_name)
    except Exception as e:
        print(f"== EXCEPTION == static_post: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500


@app.route('/thumbnails/', defaults={'post_name': None})
@app.route('/thumbnails/<post_name>')
def static_thumbnail(post_name=None):
    '''
    Serve the thumbnail image from server's file system.
    `inputs` image_path: path to image
    `returns` static image
    '''
    try:
        file_name = path.abspath(f"../../thumbnails/{post_name}")
        return send_file(file_name)
    except Exception as e:
        print(f"== EXCEPTION == static_thumbnail: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500


@app.route('/post-delete/', defaults={'post_id': 0})
@app.route('/post-delete/<post_id>')
def post_delete(post_id=None):
    '''
    delete post based on post_id
    `inputs` post_id - input string then change to int *prevent sql injection*
    `returns` query status
    '''
    try:
        post_id = (int(post_id))
        output = post_api.delete_post(post_id)
    except Exception as e:
        print(f"== EXCEPTION == post_delete: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/user-delete/', defaults={'user_id': 0})
@app.route('/user-delete/<user_id>')
def user_delete(user_id=None):
    '''
    delete post based on user_id
    `inputs` user_id - input string then change to int *prevent sql injection*
    `returns` query status
    '''
    try:
        user_id = (int(user_id))
        output = user_api.delete_user(user_id)
    except Exception as e:
        print(f"== EXCEPTION == user_delete: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/message-delete/', defaults={'message_id': 0})
@app.route('/message-delete/<message_id>')
def message_delete(message_id=None):
    '''
    delete post based on message_id
    `inputs` message_id - input string then change to int *prevent sql injection*
    `returns` query status
    '''
    try:
        message_id = (int(message_id))
        output = message_api.delete_message(message_id)
    except Exception as e:
        print(f"== EXCEPTION == message_delete: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/user-email-get', defaults={'user_id': 0})
@app.route('/user-email-get/<user_id>')
def email_get(user_id=None):
    try:
        user_id = (int(user_id))
        output = user_api.get_email(user_id=user_id)
    except Exception as e:
        print(f"== EXCEPTION == message_delete: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys=True, default=str), 200


# @app.route('/register-request')
# def register_request():
#     # takes user input from registration form
#     # returns firstname, lastname, email, and password in this specific order
#     try:
#         _json = request.json
#         firstname = _json['firstname']
#         lastname = _json['lastname']
#         email = _json['email']
#         password = _json['password']
#         # validate the received values
#         if firstname and lastname and email and password and request.method == 'POST':
#             return firstname, lastname, email, password
#     except Exception as e:
#         print(f"Error registering user : \n{e}")
#         raise Exception("Something went wrong while registering user.")


@app.route('/register', methods=['GET', 'POST'])
def register():
    try:
        param = request.args.to_dict()
        first_name = param.get("first_name")
        last_name = param.get("last_name")
        email = param.get("email")
        password = param.get("password")

        # return success message if user is registered successfully
        output = user_api.register(first_name=first_name, last_name=last_name, email=email, password=password)
    except Exception as e:
        print(f"== EXCEPTION == message_delete: \n{e}")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys=True, default=str), 200


# @app.route('/login-request')
# # takes user input from login form
# # returns email and password in this specific order
# def login_request():
#     try:
#         _json = request.json
#         email = _json['email']
#         password = _json['password']
#         if email and password and request.method == 'POST':
#             return email, password
#     except Exception as e:
#         print(f"Error when logging in :  \n{e}")
#         raise Exception("Something went wrong with the login.")


@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        param = request.args.to_dict()
        email = param.get("email")
        password = param.get("password")

        # return success message if user is logged in successfully
        output = user_api.login(email, password)    

    except Exception as e:
        print(f"{e}\n == EXCEPTION == login")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500

    return json.dumps({'output': output}, sort_keys=True, default=str), 200
