import dotenv from "dotenv"; // dotenv를 db.js파일에서 사용할 수 있도록 import
import Twitter from "twitter"; // twitter API Library를 사용할 수 있도록 import
import { TwitterClient } from "twitter-api-client"; // 더욱 향상된 twitter api client function을 사용할 수 있도록 import

dotenv.config(); // env파일을 불러오기

export const client = new TwitterClient({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN_KEY,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
});
