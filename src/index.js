import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import "./index.css";
//import App from "./paltrows-power-toes/src/App";
import AppLang from "./lang-context/AppLang";

ReactDOM.render(
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>,
  // document.getElementById("root")
  <AppLang />,
  document.getElementById("root")
);
