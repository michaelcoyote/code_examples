from flask import Flask, json
from werkzeug.exceptions import HTTPException
from owner import owner
from member import member

app = Flask(__name__)

app.register_blueprint(owner)
app.register_blueprint(member)


# APIs should return JSON error messages
@app.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    response = e.get_response()
    response.data = json.dumps({
        "code": e.code,
        "name": e.name,
        "description": e.description,
    })
    response.content_type = "application/json"
    return response


if __name__ == '__main__':
    app.run(debug=True, port=3939)
