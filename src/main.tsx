import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import TasksContextProvider from "./store/tasks-context.tsx";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
    >
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </Auth0Provider>
  </StrictMode>
);
