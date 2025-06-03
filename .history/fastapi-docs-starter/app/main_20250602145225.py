from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}


@app.get("/info")
def read_info():
    return {
    "project": "FastAPI Docs Starter",
    "version": "1.0.0",
    "description": "This is a small API for documentation practice.",
    "author": "Dom Caracappa"
    }