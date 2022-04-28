from flask import Blueprint
from flask_restful import Resource, Api

member = Blueprint('member', __name__)
api = Api(member)


class MemberInfo(Resource):
    def get(self):
        return {'message': 'get request'}

    def post(self):
        return {'message': 'post request'}


api.add_resource(MemberInfo, '/member')
