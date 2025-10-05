import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom"; // <-- додано

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/hw-5-react">
      {" "}
      {/* <-- basename важливий для GitHub Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
