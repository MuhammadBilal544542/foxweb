import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "react-phone-input-2/lib/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { store, persistor } from "./Redux/configureStore.js";
import { PersistGate } from "redux-persist/lib/integration/react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer />
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
