const express = require("express");
const bodyParser = require("body-parser");
const { getRequest } = require("./assets/apiAssets.js");
const { getUserRequest } = require("./assets/apiType.js");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getUserTweets = app.get("/api/userTweets", (req, res) => {
  res.send({ message: "Hello Express!" });
  const request = getUserRequest({ id: "preciousHyuk__" });
  getRequest(request.url, request.params)
    .then((response) => console.log("success"))
    .catch((error) => console.log(error));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
