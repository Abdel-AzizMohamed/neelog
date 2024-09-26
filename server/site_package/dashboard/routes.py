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


@dashboard.route("/api/dashboard/category/get", methods=["POST"])
def get_category():
    """Retrive categories from database"""
    category = request.json.get("category")

    categoriez_data = {"categories": [], "tutorials": []}
    for item in categories.find():
        categoriez_data["categories"].append(item)

    if category != "-":
        category_id = categories.find_one({"name": category}).get("_id")
        for item in tutorials.find({"category": ObjectId(category_id)}):
            print(item)
            categoriez_data["tutorials"].append(item)

    return jsonify({"massage": "success!", "data": json_util.dumps(categoriez_data)})


@dashboard.route("/api/dashboard/category/insert", methods=["POST"])
def insert_category():
    """Insert a new category into the database"""
    name = request.json.get("name")
    category = request.json.get("category")
    tutorial = request.json.get("tutorial")
    print(category)

    if tutorial != "-":
        tutorial_id = tutorials.find_one({"name": name})
        sections.insert_one(
            {
                "name": name,
                "index": 1,
                "category": category,
                "tutorial": tutorial_id,
                "creation_date": datetime.now(),
                "modification_time": datetime.now(),
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
                "modification_time": datetime.now(),
                "children": 0,
            }
        )
    else:
        categories.insert_one(
            {
                "name": name,
                "index": 1,
                "creation_date": datetime.now(),
                "modification_time": datetime.now(),
                "children": 0,
            }
        )

    return jsonify({"Massage": "Success!"})
