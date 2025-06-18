import { useTaskContext } from "../../store/tasks-context";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
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
    <div className="task-description-container">
      <h1>{task.task}</h1>
      <p>{task.description}</p>
      <div className="task-button-group">
        <Button onClick={() => toggleTask(task.id)}>
          {task.completed ? <FontAwesomeIcon icon={faCheck} /> : "Incomplete"}
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Link to={`/update-task/${id}`}>
          <Button>Edit Task</Button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDescription;
