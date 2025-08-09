import React from "react";
import { Link, useRouteError } from "react-router";

function Error() {
  const error = useRouteError();

  let title = "Error!";
  let message = "Bir hata oluştu.Tekrar deneyiniz...";

  if (error.status === 404) {
    (title = "Not Found"), (message = "Aradığınız kaynak bulunamadı");
  }
  if (error.status === 500) {
    message = error.data;
  }

  return (
    <div id="error">
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
}

export default Error;
