from api import app
from dotenv import load_dotenv
import os
from decouple import config

load_dotenv()
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEBUG = config('DEBUG', cast=bool)
HOST = config("HOST")
PORT = config("PORT")

if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=DEBUG)
