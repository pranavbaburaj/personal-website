from flask import Flask
from flask_restful import Resource, Api
from views import IndexView

# the main application and the api
app = Flask(__name__)
api = Api(app)


app.add_url_rule('/', view_func=IndexView.as_view('index'))

