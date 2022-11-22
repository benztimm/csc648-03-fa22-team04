'''
Date: 11/15/22
Developers: Sudhanshu Kulkarni
Description: Backend server driving file, to run the server forever via WSGI
'''

from gevent.pywsgi import WSGIServer
from root import app

from routes import *

# As flask is not a production suitable server, we use will
# a WSGIServer instance to serve our flask application. 
if __name__ == '__main__':  
    WSGIServer(('0.0.0.0', 5000), app).serve_forever()
