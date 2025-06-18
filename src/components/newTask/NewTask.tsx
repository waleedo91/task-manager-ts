import { type FormEvent } from "react";
import { useTaskContext } from "../../store/tasks-context";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { Form, Button } from "react-bootstrap";

import "./NewTask.css";

const NewTask: React.FC = () => {
  const { user } = useAuth0();
  const { addTask } = useTaskContext();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const task = formData.get("task");
    const description = formData.get("description");

    if (typeof task !== "string" || typeof description !== "string") {
      console.error("Invalid form data");
      return;
    }

    addTask({
      id: Date.now(),
      task,
      description,
      completed: false,
      userId: user?.sub || "",
    });
    console.log(formData);

    navigate("/");
  }

  return (
    <div className="new-task-container">
      <h1>Create Task</h1>
      <Form onSubmit={handleSubmit} className="new-task-form">
        <Form.Group className="mb-3" controlId="taskInput">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your task here."
            name="task"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows={3} name="description" />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit Task
        </Button>
      </Form>
    </div>
  );
};

export default NewTask;
