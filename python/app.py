import socket
from flask import Flask
app = Flask(__name__)

import mysql.connector
cnx = mysql.connector.connect(user='user01', password='password01',
                              host='db',
                              database='hello')
cnx.close()

@app.route("/")
def hello_world():
    hostname = socket.gethostname()
    return f"<p>Hello, {hostname}!</p>"