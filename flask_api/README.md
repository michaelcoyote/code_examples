# Flask API example app

[TOC]

## App

basic REST API implementation examples w/ [flask](https://flask.palletsprojects.com/en/2.1.x/) [Flask RESTful](https://flask-restful.readthedocs.io/en/latest/api.html) and [flask-rest_api](https://flask-rest-api.readthedocs.io/en/stable/index.html)

Routes include:

- `/owner` which implements `GET`
- `/member` which implements `GET` and `POST`

All routes use:

- ["Class based" resource assignment](https://flask-restful.readthedocs.io/en/latest/api.html#flask_restful.Api.add_resource)
- [Blueprint](https://flask.palletsprojects.com/en/2.1.x/api/#blueprint-objects) based resources assignment

Errors are [handled and returned as JSON](https://flask.palletsprojects.com/en/2.1.x/errorhandling/#generic-exception-handlers)]

## Container

The app is containerized and has a `Dockerfile` in this subdirectory and is designed to be built from the top level directory of this project which also contains the `compose.yml` file which contains references to the app from the root.

The container can be built by using the following command from the top level directory of the project..

```bash
docker build -f flask_api/Dockerfile --tag flask-api-app .
```

You can run the container with:

```bash
docker run -d -p 3939:3939 flask-api-app
```

You can see the logs for the container with:

```bash
docker logs $(docker ps |awk '$2 ~ /flask-api-app/ {print $1}')
```

to stop:

```bash
docker stop $(docker ps |awk '$2 ~ /flask-api-app/ {print $1}')
```
