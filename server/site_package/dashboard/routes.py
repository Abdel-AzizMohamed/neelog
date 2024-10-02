"""Dashboard blueprint"""

from datetime import datetime
from flask import Blueprint, jsonify, request
from site_package.modules import categories, tutorials, sections, articles
from bson import json_util
from bson.objectid import ObjectId


dashboard = Blueprint("dashboard", __name__)


def replace_id_field(data, replace_filter) -> list:
    """"""
    new_data = []

    for item in data:
        for name, value in replace_filter.items():
            item[name] = value
        new_data.append(item)

    return new_data


def get_collection(category: str, tutorial: str):
    """"""
    if tutorial != "-":
        return sections
    elif category != "-":
        return tutorials
    return categories


@dashboard.route("/api/dashboard/tagging/filter_one", methods=["POST"])
def get_one_tagging():
    """Retrieve one Connected tagging data"""
    levels = request.json.get("levels")
    current_level = levels[-1]
    max_level = len(levels)

    if max_level == 1:
        filter_data = categories.find()
    elif max_level == 2:
        parent_id = categories.find_one({"name": current_level}).get("_id")
        filter_data = tutorials.find({"category": ObjectId(parent_id)})
        filter_data = replace_id_field(filter_data, {"category": current_level})
    elif max_level == 3:
        parent_id = tutorials.find_one({"name": current_level}).get("_id")
        filter_data = sections.find({"tutorial": ObjectId(parent_id)})
        filter_data = replace_id_field(
            filter_data, {"category": levels[-2], "tutorial": current_level}
        )
    elif max_level == 4:
        parent_id = sections.find_one({"name": current_level}).get("_id")
        filter_data = articles.find({"section": ObjectId(parent_id)})
        filter_data = replace_id_field(
            filter_data,
            {"category": levels[-3], "category": levels[-2], "section": current_level},
        )
    else:
        return jsonify({"massage": "Reached the end of connections", "data": None})

    return jsonify(
        {"massage": "Fetched one Successfully!", "data": json_util.dumps(filter_data)}
    )


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

    return jsonify(
        {"massage": "Fetched all Successfully!", "data": json_util.dumps(filter_data)}
    )


@dashboard.route("/api/dashboard/tagging/insert", methods=["POST"])
def insert_category():
    """Insert a new category into the database"""
    name = request.json.get("name")
    category = request.json.get("category")
    tutorial = request.json.get("tutorial")

    if tutorial != "-":
        category_id = categories.find_one({"name": category}).get("_id")
        tutorial_id = tutorials.find_one({"name": tutorial}).get("_id")
        sections.insert_one(
            {
                "name": name,
                "index": 1,
                "category": category_id,
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

    return jsonify({"Massage": "Inserted Successfully!"})


@dashboard.route("/api/dashboard/tagging/edit", methods=["POST"])
def edit_category():
    """edit a new category into the database"""
    id = request.json.get("id")
    name = request.json.get("name")
    category = request.json.get("category")
    tutorial = request.json.get("tutorial")

    print(category)
    print(tutorial)

    collection = get_collection(category, tutorial)

    categories.delete_one({"_id": ObjectId(id)})
    tutorials.delete_one({"_id": ObjectId(id)})
    sections.delete_one({"_id": ObjectId(id)})

    category_id = categories.find_one({"name": category})
    tutorial_id = tutorials.find_one({"name": tutorial})

    collection.insert_one(
        {
            "name": name,
            "index": 1,
            "category": "-" if category_id is None else category_id.get("_id"),
            "tutorial": "-" if tutorial_id is None else tutorial_id.get("_id"),
            "creation_date": datetime.now(),
            "modification_date": datetime.now(),
            "children": 0,
        }
    )

    return jsonify({"Massage": "Edited Successfully!"})
