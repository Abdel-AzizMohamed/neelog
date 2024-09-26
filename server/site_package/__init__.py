from flask import Flask
from flask_cors import CORS
from site_package.config import Config


def create_app(config_class=Config):
    """create app instance"""
    app = Flask(__name__)
    app.config.from_object(config_class)
    cors = CORS()
    cors.init_app(app)

    from site_package.main.routes import main
    from site_package.dashboard.routes import dashboard

    app.register_blueprint(main)
    app.register_blueprint(dashboard)

    return app
