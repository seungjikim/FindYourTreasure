import dotenv from "dotenv"; // dotenv를 db.js파일에서 사용할 수 있도록 import
import Twitter from "twitter"; // twitter API Library를 사용할 수 있도록 import
//import { TwitterClient } from "twitter-api-client"; // 더욱 향상된 twitter api client function을 사용할 수 있도록 import

dotenv.config(); // env파일을 불러오기

export const TwitterClient = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});
