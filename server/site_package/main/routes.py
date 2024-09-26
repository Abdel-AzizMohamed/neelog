"""Define Main routes"""

from flask import render_template, Blueprint


main = Blueprint("main", __name__)


@main.route("/")
def home():
    """"""
    return "Hello world"
