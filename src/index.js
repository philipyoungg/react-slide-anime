import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<App totalSlide={10} duration={3000} />, document.getElementById("root"));
registerServiceWorker();
