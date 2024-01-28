import "./styles/global.css.ts";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import AuthProvider from "./context/AuthContext.tsx";
import MemoPadProvider from "./context/MemoPadContext.tsx";
import { APIProvider } from "./remotes/APIProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <APIProvider>
      <AuthProvider>
        <MemoPadProvider>
          <App />
        </MemoPadProvider>
      </AuthProvider>
    </APIProvider>
  </React.StrictMode>,
);
