import { createContext, useContext, useReducer, useEffect } from "react";

const loadTasksFromLocalStorage = (): Task[] => {
  try {
    const tasksJSON = localStorage.getItem("tasks");
    if (!tasksJSON) return [];
    return JSON.parse(tasksJSON) as Task[];
  } catch {
    return [];
  }
};

export type Task = {
  id: number;
  task: string;
  description: string;
  completed: boolean;
  userId: string;
};

type TasksState = {
  tasks: Task[];
};

type TasksContextValue = TasksState & {
  addTask: (taskData: Task) => void;
  deleteTask: (taskId: number) => void;
  toggleTask: (taskId: number) => void;
  updateTask: (updatedTask: Task) => void;
};

const TasksContext = createContext<TasksContextValue | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext() {
  const tasksCtx = useContext(TasksContext);

  if (tasksCtx === null) {
    throw new Error(
      "useTasksContext must be used within a TasksContextProvider"
    );
  }

  return tasksCtx;
}

type TasksContextProviderProps = {
  children: React.ReactNode;
};

type AddTaskAction = {
  type: "ADD_TASK";
  payload: Task;
};

type DeleteTaskAction = {
  type: "DELETE_TASK";
  payload: number;
};

type ToggleTaskAction = {
  type: "TOGGLE_TASK";
  payload: number;
};

type UpdateTaskAction = {
  type: "UPDATE_TASK";
  payload: Task;
};

type Action =
  | AddTaskAction
  | DeleteTaskAction
  | ToggleTaskAction
  | UpdateTaskAction;

function tasksReducer(state: TasksState, action: Action): TasksState {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      break;
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
      break;
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
      break;
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    default:
      return state;
  }
}

export default function TasksContextProvider({
  children,
}: TasksContextProviderProps) {
  const [tasksState, dispatch] = useReducer(
    tasksReducer,
    {
      tasks: [],
    },
    () => ({ tasks: loadTasksFromLocalStorage() })
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksState.tasks));
  }, [tasksState.tasks]);
  const ctx: TasksContextValue = {
    tasks: tasksState.tasks,
    addTask: (taskData) => {
      dispatch({ type: "ADD_TASK", payload: taskData });
    },
    deleteTask: (taskId) => {
      dispatch({ type: "DELETE_TASK", payload: taskId });
    },
    toggleTask: (taskId) => dispatch({ type: "TOGGLE_TASK", payload: taskId }),
    updateTask: (updatedTask) =>
      dispatch({ type: "UPDATE_TASK", payload: updatedTask }),
  };
  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
}
