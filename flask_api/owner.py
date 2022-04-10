from flask import Blueprint
from flask_restful import Resource, Api

root = Blueprint('root', __name__, url_prefix='/')
api = Api(root)


class AppOwner(Resource):
    def get(self):
        return {'whoisit': 'michael'}


api.add_resource(AppOwner, '/')
