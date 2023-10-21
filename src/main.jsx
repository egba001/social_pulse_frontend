import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import FormContextProvider from "./context/FormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <FormContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FormContextProvider>
  </AuthContextProvider>
);
