import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { RecoilRoot } from "recoil";
import App from "./App";
import "./index.css";

if (import.meta.env.PROD) console.log = () => null; // Tricky for production (but still not safe)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
);
