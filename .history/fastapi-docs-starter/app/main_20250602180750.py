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
def math_fact(number: int = Query(..., description="A positive integer to get a math fact about")):
    """
    Math fact endpoint.

    Args:
        number (int): A positive integer.

    Returns:
        dict: A fun fact about the number.

    Example JSON response::

        {
            "number": 7,
            "fact": "7 is a prime number."
        }
    """
    if number <= 0:
        return {"error": "Please provide a positive integer."}

    # Basic facts
    facts = []
    if number % 2 == 0:
        facts.append(f"{number} is an even number.")
    else:
        facts.append(f"{number} is an odd number.")

    if number == 1:
        facts.append("1 is neither prime nor composite.")
    elif number > 1:
        # Very simple primality check
        for i in range(2, int(number**0.5) + 1):
            if number % i == 0:
                facts.append(f"{number} is not prime (divisible by {i}).")
                break
        else:
            facts.append(f"{number} is a prime number.")

    facts.append(f"The square of {number} is {number**2}.")
    facts.append(f"The cube of {number} is {number**3}.")

    return {
        "number": number,
        "facts": facts
    }
