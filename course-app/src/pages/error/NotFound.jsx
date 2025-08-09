import React from "react";
import { Link } from "react-router";

function NotFound() {
  return (
    <div id="error">
      <h1>NotFound</h1>
      <p>Kaynak Bulunamadi</p>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
}

export default NotFound;
