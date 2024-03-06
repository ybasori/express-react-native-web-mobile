import React, { useEffect, useRef } from "react";
import { AppRegistry } from "react-native";

import App from "./src/App";

const AppWeb = () => {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef) {
      divRef.current.firstElementChild.style.height = "100%";
    }
  }, [divRef]);

  return (
    <div
      ref={divRef}
      style={{
        maxWidth: 395,
        width: "100%",
        height: "100vh",
        margin: "auto",
        boxShadow: "0 0 20px 20px #ccc",
      }}>
      <App />
    </div>
  );
};

AppRegistry.registerComponent("appName", () => AppWeb);
AppRegistry.runApplication("appName", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});
