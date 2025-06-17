import { useTaskContext } from "../../store/tasks-context";
import { Link } from "react-router-dom";

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
          Delete
        </Button>
        <Card.Body>
          <Link to={`/task/${id}`}>
            <Card.Title className="list-title">{title}</Card.Title>
          </Link>
          <Button onClick={() => toggleTask(id)}>
            {completed ? "Complete" : "Incomplete"}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
