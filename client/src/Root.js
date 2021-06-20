import React from "react";
import { getRequest } from "../assets/apiAssets";
import { getUserRequest } from "../assets/apiType"
import "./style.scss";

const getData = () => {
  const request = getUserRequest({ id: "preciousHyuk__" });
  getRequest(request.url, request.params).then(response => console.log(response))
}

getData()

function Root() {
  return <h3 className="title">Hello, React</h3>;
}

export default Root;
