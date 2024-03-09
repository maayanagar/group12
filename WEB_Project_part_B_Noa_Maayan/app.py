from flask import Blueprint, render_template, request, redirect, session, jsonify, Flask

app = Flask(__name__)
# app.secret_key = '1212'


@app.route('/')
def hello_world():
    return 'Hello World!'
