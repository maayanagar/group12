from flask import Blueprint, render_template, request, redirect, session, jsonify, Flask
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# mongodb connection with one of our users
uri = "mongodb+srv://maayann126:MAAYANMAAYAN123456@cluster0.gdvjyvv.mongodb.net/?retryWrites=true&w=majority"
# Create a new client and connect to the server
cluster = MongoClient(uri, server_api=ServerApi('1'))
iTennis_DB = cluster["ITennis"]


app = Flask(__name__)
app.secret_key = '1212'


@app.route('/')
def hello_world():
    return 'Hello World!'
