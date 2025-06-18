import { useTaskContext } from "../../store/tasks-context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

import { Card, Button } from "react-bootstrap";

import "./Task.css";

type TaskProps = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Task({ id, title, completed }: TaskProps) {
  const { deleteTask, toggleTask } = useTaskContext();
  return (
    <>
      <Card style={{ width: "18rem" }} className="task-list-item">
        <Button
          onClick={() => deleteTask(id)}
          className="task-delete-button"
          variant="danger"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        <Card.Body className="content-items">
          <Link to={`/task/${id}`}>
            <Card.Title className="list-title">{title}</Card.Title>
          </Link>
          <Button onClick={() => toggleTask(id)} className="complete-button">
            {completed ? <FontAwesomeIcon icon={faCheck} /> : "Incomplete"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
