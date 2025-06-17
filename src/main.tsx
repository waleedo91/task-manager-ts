import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";
import TasksContextProvider from "./store/tasks-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </StrictMode>
);
