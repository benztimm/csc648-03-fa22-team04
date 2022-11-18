from flask import jsonify
from root import app
import json
from apis.media_api import *
from apis.post_api import get_post


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
        output = search_media(keyword = keyword)
        # print(f":: DEBUG LOGS :: SEARCH OUTPUT : {output}")                                             # Adding debug logs
    except Exception as e:
        print(f"== EXCEPTION == {e}")           
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling
    
    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200


@app.route('/get-posts/', defaults={'keyword': None})
@app.route('/get-posts/<keyword>')
def get_posts(keyword=None):
    '''
    Search posts based on keywords. The keyword will be searched on title, description and category.

    `inputs` keyword - input string
    `returns` query output
    '''
    try:
        output = get_post(keyword = keyword)
        # print(f":: DEBUG LOGS :: SEARCH OUTPUT : {output}")                                             # Adding debug logs
    except Exception as e:
        print(f"== EXCEPTION == {e}")           
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
        output = get_latest_media(limit = limit)
        # print(f":: DEBUG LOGS :: SEARCH OUTPUT : {output}")                                             # Adding debug logs
    except Exception as e:
        print(f"== EXCEPTION == {e}")           
        return jsonify({"message: Something went wrong. Please check logs on the server :/ "}), 500     # Exception handling
    
    # JSON.dumps because it can handle things better:
    return json.dumps({'output': output, 'additional_info': 'something random info'}, sort_keys = True, default = str), 200