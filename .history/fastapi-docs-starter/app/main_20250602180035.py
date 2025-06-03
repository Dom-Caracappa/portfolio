from fastapi import FastAPI, Query

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


@app.get("/health")
def health_check():
    """
    Health check endpoint.

    Returns:
        dict: A simple JSON status message.

    Example JSON response::

        {
            "status": "ok"
        }
    """
    return {"status": "ok"}


@app.get("/echo")
def echo(message: str = Query(None, description="The message to echo back")):
    """
    Echo endpoint.

    Args:
        message (str): The message to echo back.

    Returns:
        dict: A JSON object containing the echoed message.

    Example JSON response::

        {
            "echo": "Hello, World!"
        }
    """
    return {"echo": message}