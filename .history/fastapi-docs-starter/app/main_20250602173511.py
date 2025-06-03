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

    Example:

        .. code-block:: json

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
