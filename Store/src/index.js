import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./styles/index.css";

import { store } from "./features/store";

import App from "./components/App/App";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

