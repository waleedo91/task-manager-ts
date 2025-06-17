import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import TaskManager from "./components/taskManager/TaskManager";
import NewTask from "./components/newTask/NewTask";
import { BrowserRouter, useRoutes } from "react-router-dom";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <TaskManager /> },
    { path: "/new-task", element: <NewTask /> },
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
