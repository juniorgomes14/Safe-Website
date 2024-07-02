import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import AdminLogin from "./routes/AdminLogin/AdminLogin.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";
import Protected from "./routes/Protected/Protected.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/dashboard" element={ <Protected><h1>Dashboad</h1></Protected> } />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
