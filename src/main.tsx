import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./Context/LoadingContext/LoadingContext.tsx";
import AuthContextProvider from "./Context/AuthContext/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
    </AuthContextProvider>
  </StrictMode>
);
