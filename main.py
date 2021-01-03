from flask import Flask
from views.home import HomeViews
from flask import redirect, url_for
from flask_frozen import Freezer

app = Flask(__name__)

app.add_url_rule("/", view_func=HomeViews.as_view("index"))


