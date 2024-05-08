from flask import Flask
app = Flask(__name__)

import mysql.connector
cnx = mysql.connector.connect(user='user01', password='password01',
                              host='db',
                              database='hello')
cnx.close()

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"