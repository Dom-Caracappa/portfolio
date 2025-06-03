from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    """
    Root endpoint of the API.

    Returns:
        dict: A JSON greeting message.

    Example JSON response::

        {
            "message": "Hello, FastAPI!"
        }
    """
    return {"message": "Hello, FastAPI!"}



@app.get("/info")
def read_info():
    """
    Information endpoint with project details.

    Returns:
        dict: A JSON object containing:
            - project name
            - version
            - description
            - author

    Example JSON response::

        {
            "project": "FastAPI Docs Starter",
            "version": "1.0.0",
            "description": "This is a small API for documentation practice",
            "author": "Dom Caracappa"
        }
    """
    return {
        "project": "FastAPI Docs Starter",
        "version": "1.0.0",
        "description": "This is a small API for documentation practice",
        "author": "Dom Caracappa"
    }
