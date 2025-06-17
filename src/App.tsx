import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import TaskManager from "./components/taskManager/TaskManager";
import NewTask from "./components/newTask/NewTask";
import TaskDescription from "./components/taskDescription/TaskDescription";
import { BrowserRouter, useRoutes } from "react-router-dom";
import UpdateTask from "./components/updateTask/UpdateTask";

function AppRoutes() {
  const routes = useRoutes([
    { path: "/", element: <TaskManager /> },
    { path: "/new-task", element: <NewTask /> },
    { path: "/task/:id", element: <TaskDescription /> },
    { path: "/update-task/:id", element: <UpdateTask /> },
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
