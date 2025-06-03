from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    """
    Root endpoint of the API.
    
    Returns a JSON greeting message.
    """
    return {"message": "Hello, FastAPI!"}

@app.get("/info")
def read_info():
    """
    Information endpoint with project details.
    
    Returns a JSON object containing:
    - project name
    - version
    - description
    - author
    """
    return {
        "project": "FastAPI Docs Starter",
        "version": "1.0.0",
        "description": "This is a small API for documentation practice",
        "author": "Dom Caracappa"
    }
