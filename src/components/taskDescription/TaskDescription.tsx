import { useTaskContext } from "../../store/tasks-context";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import "./TaskDescription.css";

function TaskDescription() {
  const { tasks, deleteTask, toggleTask } = useTaskContext();
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  const navigate = useNavigate();

  console.log(task);

  if (!task) return <h2>Task unavailable</h2>;

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/");
  };

  return (
    <div>
      <h1>{task.task}</h1>
      <p>{task.description}</p>
      <Button onClick={() => toggleTask(task.id)}>
        {task.completed ? "Completed" : "Incomplete"}
      </Button>
      <Button variant="danger" onClick={handleDelete}>
        Delete Task
      </Button>
      <Link to={`/update-task/${id}`}>
        <Button>Edit Task</Button>
      </Link>
    </div>
  );
}

export default TaskDescription;
