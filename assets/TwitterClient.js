const Twitter = require('twitter'); // twitter API Library를 사용할 수 있도록 import
//import { TwitterClient } from "twitter-api-client"; // 더욱 향상된 twitter api client function을 사용할 수 있도록 import

require('dotenv').config(); // env파일을 불러오기

module.exports.TwitterClient = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  bearer_token: process.env.BEARER_TOKEN,
});