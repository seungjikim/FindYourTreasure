const { TwitterClient } = require("./TwitterClient.js");

module.exports.getRequest = function (url, request) {
  return new Promise((resolve, reject) => {
    TwitterClient.get(url, {
      screen_name: "preciousHyuk__",
    }, (error, tweets) => {
      if (error) {
        reject(new Error("Get Request is failed", error));
      } else {
        resolve(tweets);
      }
    })
  });
};
