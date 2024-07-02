import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import "./index.css";
import AdminLogin from "./routes/AdminLogin/AdminLogin.jsx";
import Dashboard from "./routes/Dashboard/Dashboard.jsx";
import Protected from "./routes/Protected/Protected.jsx";

const queryClient = new QueryClient({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard/>
              </Protected>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
