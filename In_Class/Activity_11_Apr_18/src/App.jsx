import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Shop from "./components/ShoppingBootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Shop />
  </>
);

export default App;