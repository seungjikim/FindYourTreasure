import path from "path";
import { getUserRequest } from "../assets/apiType";
import { getRequest } from "../assets/apiAssets";
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