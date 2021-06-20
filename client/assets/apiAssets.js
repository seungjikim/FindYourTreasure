import { TwitterClient } from "./TwitterClient";

export function getRequest(url, request) {
  return new Promise((resolve, reject) => {
    console.log(TwitterClient)
    TwitterClient.get(url, request, (error, tweets) => {
      if (error) {
        reject(new Error("Get Request is failed", error));
      } else {
        resolve(tweets);
      }
    });
  });
}
