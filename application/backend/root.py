'''
Date: 11/15/22
Developers: Sudhanshu Kulkarni
Description: Core flask app of backend server
'''

from flask import Flask
from flask_cors import CORS, cross_origin
from flask_bcrypt import Bcrypt

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

bcrypt = Bcrypt(app=app)
