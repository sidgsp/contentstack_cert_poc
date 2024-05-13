
import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { LivePreviewProvider } from "./context/live-preview-context-provider";
import "@contentstack/live-preview-utils/dist/main.css"; 
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <LivePreviewProvider>
      <App />
    </LivePreviewProvider>
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
