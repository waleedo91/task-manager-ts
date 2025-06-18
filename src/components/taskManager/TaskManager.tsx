import Task from "../task/Task";
import { useTaskContext } from "../../store/tasks-context";
import { useAuth0 } from "@auth0/auth0-react";

import "./TaskManager.css";

function TaskManager() {
  const { tasks } = useTaskContext();
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <p>You must be logged in to view your tasks!</p>;
  }

  const userTasks = tasks.filter((task) => task.userId === user?.sub);

  return (
    <div className="task-list-container">
      <h1 className="task-list-title">Task Manager</h1>
      <ul className="task-list">
        {userTasks.length === 0 && <p>Nothing yet!</p>}
        {userTasks.map((task) => (
          <li key={task.id}>
            <Task id={task.id} title={task.task} completed={task.completed} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
