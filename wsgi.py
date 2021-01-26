from flask import Flask
from app import app as Application

if __name__ == '__main__':
    Application.run(
        debug=True
    )