import path from "path";
import { TwitterClient } from "./TwitterClient.mjs";
import { getUserRequest } from "./apiType.mjs";
import fs from "fs";

const request = getUserRequest({ id: "preciousHyuk__" });

getRequest(request.url, request.params).then((response) => {
  const result = response;
  if (result) {
    fs.writeFile(
      path.resolve("data.txt"),
      JSON.stringify(result),
      function (err) {
        if (err === null) {
          console.log("success");
        } else {
          console.log("fail");
        }
      }
    );
  }
});

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
