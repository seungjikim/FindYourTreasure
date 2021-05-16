import { TwitterClient } from "./TwitterClient.js";

export function getRequest(url, request) {
  return new Promise((resolve, reject) => {
    TwitterClient.get(url, request, (error, tweets) => {
      if (error) {
        reject(new Error("Get Request is failed", error));
      } else {
        resolve(tweets);
      }
    });
  });
}
