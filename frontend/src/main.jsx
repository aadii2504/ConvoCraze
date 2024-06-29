import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContexProvider } from "./context/AuthContex.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContexProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </AuthContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
