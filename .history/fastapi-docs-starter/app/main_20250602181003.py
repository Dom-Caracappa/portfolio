from fastapi import FastAPI, Query
import random

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

@app.get("/fact")
def get_random_fact():
    """
    Get a random fact.

    Returns:
        dict: A JSON object containing a random fact.

    Example JSON response::

        {
            "fact": "Did you know that honey never spoils?"
        }
    """
    facts = [
        "Did you know that honey never spoils?",
        "Bananas are berries, but strawberries aren't.",
        "Octopuses have three hearts.",
        "A group of flamingos is called a 'flamboyance'.",
        "The longest wedding veil was longer than 63 football fields."
    ]
    return {"fact": random.choice(facts)}

@app.get("/math-fact")
def read_math_fact(number: int = Query(..., description="A positive integer")):
    """
    Math Fact endpoint.

    Parameters:
        number (int): A positive integer to learn fun math facts about.

    Returns:
        dict: A JSON object containing the number and a list of interesting facts.

    Example usage:
        - In browser: http://127.0.0.1:8000/math-fact?number=12
        - Using curl: curl "http://127.0.0.1:8000/math-fact?number=12"

    Example JSON response:
        {
            "number": 12,
            "facts": [
                "12 is an even number.",
                "12 is not prime (divisible by 2).",
                "The square of 12 is 144.",
                "The cube of 12 is 1728."
            ]
        }
    """
    facts = [
        f"{number} is an even number." if number % 2 == 0 else f"{number} is an odd number.",
        f"{number} is {'not ' if number % 2 == 0 else ''}prime (divisible by {2 if number % 2 == 0 else 'itself'})",
        f"The square of {number} is {number ** 2}.",
        f"The cube of {number} is {number ** 3}."
    ]
    return {"number": number, "facts": facts}
