from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from decouple import config
import tweepy
import json
# load enviroment variables
load_dotenv()

# get the env variables
CONSUMER_KEY = config("CONSUMER_KEY")
CONSUMER_SECRET = config("CONSUMER_SECRET")
ACCESS_TOKEN = config("ACCESS_TOKEN")
ACCESS_TOKEN_SECRET = config("ACCESS_TOKEN_SECRET")

auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_TOKEN, ACCESS_TOKEN_SECRET)

# instatiate tweepy
api = tweepy.API(auth)

trump = api.get_user("realdonaldtrump")
tweet = json.dumps({
    "tweet": trump.status.text
})

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return tweet
