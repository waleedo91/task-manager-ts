import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTaskContext, type Task } from "../../store/tasks-context";
import { Form, Button } from "react-bootstrap";

function UpdateTask() {
  const { id } = useParams();
  const taskId = Number(id);
  const { tasks, updateTask } = useTaskContext();
  const navigate = useNavigate();

  const task = tasks.find((t) => t.id === taskId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.task);
      setDescription(task.description);
    }
  }, [task]);

  if (!task) {
    return <p>Task Unavailable.</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedTask: Task = {
      ...task,
      task: title,
      description,
    };

    updateTask(updatedTask);
    navigate(`/task/${taskId}`);
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <Form.Group>
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Changes
      </Button>
    </Form>
  );
}

export default UpdateTask;
