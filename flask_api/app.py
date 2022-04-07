
from flask import Flask
from flask_restful import Resource, Api

app=Flask(__name__)
api=Api(app)


class AppOwner(Resource):
    def get(self):
        return {'whoisit': 'michael'}

api.add_resource(AppOwner, '/')

if __name__=='__main__':
    app.run(debug=True, port=3939)