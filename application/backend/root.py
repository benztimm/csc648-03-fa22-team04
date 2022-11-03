from flask import jsonify, Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "<h1 style='color:black'>CSC 648 - Team 4!</h1>"


@app.route('/data', methods=['GET'])
def data():
    '''
    TEST FUNCTION 
    :return: Json format of random data or error message
    '''
    try:
        return jsonify({'data': 'some random data you might need'}), 200
    except:
        return jsonify({'error': 'error fetching the data'}), 500


@app.route('/data-parameters', defaults={'x': 'FLASK'})
@app.route('/data-parameters/<x>')
def data_parameters(x=None):
    '''
    TEST FUNCTION WITH PARAMETERS
    :input: x - anything
    :return: JSON format of input
    '''
    print(f"x: {x}")
    return jsonify({'input': x, 'additional_info': 'something random info'}), 200


if __name__ == "__main__":
    app.run(host='0.0.0.0')
