import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { Helmet } from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Helmet>
        <title>ONLINE SHOP</title>
        <meta name="description" content="ONLINE SHOP" />
        {/* Các thẻ head tùy chỉnh khác */}
      </Helmet>
      <App />
    </React.StrictMode>
  </Provider>
);
