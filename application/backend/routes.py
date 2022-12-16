'''
Date: 11/12/22
Developers: Sudhanshu Kulkarni, Ekarat Buddharuksa
Description: Routing page to handle all requests inbound to backend API
'''

from flask import jsonify, send_file, request, render_template
from root import app, bcrypt
import json
from os import path
import os
from PIL import Image
import traceback

import apis.post_api as post_api
import apis.user_api as user_api
import apis.message_api as message_api
import apis.category_api as category_api

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
        print(f"== EXCEPTION == get_post_details: \n{traceback.print_exc()}\n")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


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
        print(f"== EXCEPTION == get_latest_post: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


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
        print(f"== EXCEPTION == static_post: \n{traceback.print_exc()}\n")
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
        print(f"== EXCEPTION == static_thumbnail: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500


@app.route('/delete-post/', defaults={'post_id': 0})
@app.route('/delete-post/<post_id>')
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
        print(f"== EXCEPTION == post_delete: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/delete-user/', defaults={'user_id': 0})
@app.route('/delete-user/<user_id>')
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
        print(f"== EXCEPTION == user_delete: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/delete-message/', defaults={'message_id': 0})
@app.route('/delete-message/<message_id>')
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
        print(f"== EXCEPTION == message_delete: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/search-posts/',defaults={'keyword': None,'category': None,'type': None})
def search_posts(keyword = None,category = None,type = None):
    '''
    Search posts based on keywords. The keyword will be searched on title, description and category.

    `inputs`
        keyword - input string
        optional
            category - input string
            type - input string
    `returns` query output
    '''
    try:
        param = request.args.to_dict()
        if 'keyword' in param:
            keyword = param['keyword']
        if 'category' in param:
            category = param['category']
        if 'type' in param:
            type = param['type']
        output = post_api.search_posts(keyword,category,type)
    except Exception as e:
        print(f"== EXCEPTION == search_posts: \n{traceback.print_exc()}\n")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/get-user-email', defaults={'user_id': 0})
@app.route('/get-user-email/<user_id>')
def email_get(user_id=None):
    try:
        user_id = (int(user_id))
        output = user_api.get_email(user_id=user_id)
    except Exception as e:
        print(f"== EXCEPTION == message_delete: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys=True, default=str), 200


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
        password = bcrypt.generate_password_hash(param.get("password")).decode('utf-8')

        # return success message if user is registered successfully
        output = user_api.register(first_name=first_name, last_name=last_name, email=email, password=password)

    except Exception as e:
        print(f"== EXCEPTION == register: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys=True, default=str), 200


@app.route('/update-password')
def update_password():
    try:
        param = request.args.to_dict()
        email = param.get("username")
        password = param.get("password")

        if not email or not password:
            return jsonify({"message": "Missing Credentials!"}), 403
        
        if user_api.update_password(email=email, password=password):
            return jsonify({"message": "Update Successfull"}), 200
        else:
            return jsonify({"message": "Could not update password!"}), 403

    except Exception as e:
        print(f"== EXCEPTION == login:\n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500



@app.route('/login', methods=['GET', 'POST'])
def login():
    try:
        param = request.args.to_dict()
        email = param.get("username")
        password = param.get("password")

        if not email or not password:
            return jsonify({"message": "Missing Credentials!"}), 403

        # return success message if user is logged in successfully
        output = user_api.login(email)

        if len(output):
            output = output[0]
            if bcrypt.check_password_hash(output.get("password"), password):
                del output['password']
                return jsonify({"message": "Login Successful!", 'user': output}), 500
            else:
                return jsonify({"message": "Incorrect Credentials!"}), 403
        else:
            return jsonify({"message": "User Not found!"}), 403

    except Exception as e:
        print(f"== EXCEPTION == login:\n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500


@app.route('/upload_file/',methods = ['POST'],defaults={'uploader_id' : None, 'post_type' : None, 'title' : None, 'file' : None, 'description' : None, 'price' : None, 'category' : None})
def upload_file(uploader_id = None, post_type = None, title = None, file = None, description = None, price = None, category = None):
    try:
        #check if directory exist or not. if not then create 
        #NOT NECESSARY FOR THE PROJECT
        if not os.path.exists("../../posts"):
            os.mkdir("../../posts")
        if not os.path.exists("../../thumbnails"):
            os.mkdir("../../thumbnails")

        # Save file to ../../posts
        f = request.files['file']
        f.save(os.path.join("../../posts", f.filename))

        #get all parameter
        uploader_id = request.form['uploader_id']
        post_type = request.form['post_type'].lower()
        title = request.form['title']
        file = f.filename
        description = request.form['description']
        price = request.form['price']
        category = request.form['category']
        
        #create thumbnail from file if file_type is image
        if post_type=='image':
            img = Image.open(os.path.join("../../posts", f.filename))
            SIZE = (img.width/(img.height/300), 300)
            img.thumbnail(SIZE)
            #save thumbnail to ../../thumbnails
            img.save(os.path.join("../../thumbnails", f.filename))

        #CALL API TO INSERT ITEM TO TABLE
        output = post_api.upload_post(uploader_id,post_type,title,file,description,price,category)

    except Exception as e:
        print(f"== EXCEPTION == upload-file:\n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500

    return json.dumps({'output': output}, sort_keys=True, default=str), 200


@app.route('/get-user-post/', defaults={'uploader_id': None})
@app.route('/get-user-post/<uploader_id>')
def get_user_post(uploader_id=None):
    '''
    Search posts based on uploader_id.

    `inputs` uploader_id - input string

    `returns` query output
    '''
    output = []
    try:
        if uploader_id:
            output = user_api.get_user_post(uploader_id)
    except Exception as e:
        print(f"== EXCEPTION == get-user-post: \n{traceback.print_exc()}\n")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/logout/<user_id>')
def logout(user_id):
    try:
        user_id = (int(user_id))
        user_api.logout(user_id)
        output = "Logout Successful"
    except Exception as e:
        print(f"{e}\n == EXCEPTION == logout: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys=True, default=str), 200


@app.route('/get-category/', defaults={'category_id': None})
@app.route('/get-category/<category_id>')
def get_category(category_id=None):
    '''
    Get category base on category_id. If caller not specify category_id then return all category.
    `inputs`  category_id - input Integer `Optional` 
    `returns` query output
    '''
    try:
        output = category_api.get_category(category_id)
    except Exception as e:
        print(f"== EXCEPTION == get_category: \n{traceback.print_exc()}\n")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200


@app.route('/send-message', methods=['GET', 'POST'])
def send_message():
    try:
        param = request.args.to_dict()
        buyer = param.get("buyer")
        seller = param.get("seller")
        post_id = param.get("post_id")
        message = param.get("message")

        # return success message if user is registered successfully
        output = message_api.send_message(message=message, post_id=post_id, buyer=buyer, seller=seller)

    except Exception as e:
        print(f"== EXCEPTION == send-message: \n{traceback.print_exc()}\n")
        return jsonify({"message": "Something went wrong. Please check logs on the server :/"}), 500
    return json.dumps({'output': output}, sort_keys=True, default=str), 200


@app.route('/get-user-inbox/', defaults={'user_id': None})
@app.route('/get-user-inbox/<user_id>')
def get_user_inbox(user_id=None):
    '''
    Search posts based on uploader_id.

    `inputs` uploader_id - input string

    `returns` query output
    '''
    output = []
    try:
        if user_id:
            output = message_api.inbox(user_id)
    except Exception as e:
        print(f"== EXCEPTION == get-user-inbox: \n{traceback.print_exc()}\n")
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling

    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output}, sort_keys = True, default = str), 200
