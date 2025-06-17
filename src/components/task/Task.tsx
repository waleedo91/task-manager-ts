import { Card, Button } from "react-bootstrap";

import "./Task.css";

type TaskProps = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Task({ title, completed }: TaskProps) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="task-list-item">
        <Button className="task-delete-button" variant='danger'>Delete</Button>
        <Card.Body>
          <Card.Title className="list-title">{title}</Card.Title>
          <Button>{completed ? "Complete" : "Incomplete"}</Button>
        </Card.Body>
      </Card>
    </>
  );
}
