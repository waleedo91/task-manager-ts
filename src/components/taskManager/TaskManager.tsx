import Task from "../task/Task";
import { useTaskContext } from "../../store/tasks-context";

import "./TaskManager.css";

function TaskManager() {
  const { tasks } = useTaskContext();
  return (
    <>
      <h1>Task Manager</h1>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task id={task.id} title={task.task} completed={task.completed} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskManager;
