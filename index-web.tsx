import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <div
      style={{
        maxWidth: 395,
        width: "100%",
        height: "100vh",
        margin: "auto",
        boxShadow: "0 0 20px 20px #ccc",
      }}>
      <App />
    </div>
  </React.StrictMode>,
);
