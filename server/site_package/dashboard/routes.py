"""Dashboard blueprint"""

from datetime import datetime
from flask import Blueprint, jsonify, request
from site_package.modules import (
    categories,
    tutorials,
    sections,
)
from bson import json_util
from bson.objectid import ObjectId


dashboard = Blueprint("dashboard", __name__)


@dashboard.route("/api/dashboard/tagging/filter_one", methods=["POST"])
def get_one_tagging():
    """Retrieve one Connected tagging data"""
    levels = request.json.get("levels")
    current_level = levels[-1]
    max_level = len(levels)

    if max_level == 1:
        filter_data = categories.find()

    return jsonify({"massage": "success!", "data": json_util.dumps(filter_data)})


@dashboard.route("/api/dashboard/tagging/filter_all", methods=["POST"])
def get_all_tagging():
    """Retrieve all Connected tagging data if specified"""
    category = request.json.get("category", "-")
    tutorial = request.json.get("tutorial", "-")

    filter_data = {"categories": [], "tutorials": [], "sections": []}

    for item in categories.find():
        filter_data["categories"].append(item)

    if category != "-":
        category_id = categories.find_one({"name": category}).get("_id")

        for item in tutorials.find({"category": ObjectId(category_id)}):
            filter_data["tutorials"].append(item)

    if tutorial != "-":
        tutorial_id = tutorials.find_one({"name": tutorial}).get("_id")

        for item in sections.find({"tutorial": ObjectId(tutorial_id)}):
            filter_data["sections"].append(item)

    return jsonify({"massage": "success!", "data": json_util.dumps(filter_data)})


@dashboard.route("/api/dashboard/tagging/insert", methods=["POST"])
def insert_category():
    """Insert a new category into the database"""
    name = request.json.get("name")
    category = request.json.get("category")
    tutorial = request.json.get("tutorial")

    if tutorial != "-":
        tutorial_id = tutorials.find_one({"name": name})
        sections.insert_one(
            {
                "name": name,
                "index": 1,
                "category": category,
                "tutorial": tutorial_id,
                "creation_date": datetime.now(),
                "modification_date": datetime.now(),
                "children": 0,
            }
        )
    elif category != "-":
        category_id = categories.find_one({"name": category}).get("_id")
        tutorials.insert_one(
            {
                "name": name,
                "index": 1,
                "category": ObjectId(category_id),
                "creation_date": datetime.now(),
                "modification_date": datetime.now(),
                "children": 0,
            }
        )
    else:
        categories.insert_one(
            {
                "name": name,
                "index": 1,
                "creation_date": datetime.now(),
                "modification_date": datetime.now(),
                "children": 0,
            }
        )

    return jsonify({"Massage": "Success!"})
