"""Database module"""
from pymongo import MongoClient


client = MongoClient("localhost", 27017)
mondb = client.main
categories = mondb.categories
tutorials = mondb.tutorials
sections = mondb.sections
articles = mondb.articles
