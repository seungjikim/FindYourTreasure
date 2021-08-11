const express = require("express");
const bodyParser = require("body-parser");
const { getRequest } = require("./assets/apiAssets.js");
const { getUserRequest } = require("./assets/apiType.js");
const connection = require("./database.js");
const app = express();
require('dotenv').config(); // .env파일 불러오기

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getUserTweets = (userId) => {
  app.get("/api/userTweets", (_, res) => {
    res.send({ message: "Hello Express!" });
    const request = getUserRequest({ id: userId });
    getRequest(request.url, request.params)
      .then((response) => console.log(JSON.stringify(response, _, 1))) // number is for spacer of the json string text.
      .catch((error) => console.log(error));
  });
};

app.listen(port, () => console.log(`Listening on port ${port}`));

connection.connect();
console.log("connection success")

getUserTweets("preciousHyuk__")
