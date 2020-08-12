import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MyContext } from "./MyContext/MyContext.js";


console.log(process.env)
ReactDOM.render(
  <MyContext.Provider value={'f'}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContext.Provider>,
  document.getElementById("root")
);
