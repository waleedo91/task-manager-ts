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
};

type TasksState = {
  tasks: Task[];
};

type TasksContextValue = TasksState & {
  addTask: (taskData: Task) => void;
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

type Action = AddTaskAction;

function tasksReducer(state: TasksState, action: Action): TasksState {
  if (action.type === "ADD_TASK") {
    return {
      ...state,
      tasks: [...state.tasks, action.payload],
    };
  }

  return state;
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
  };
  return <TasksContext.Provider value={ctx}>{children}</TasksContext.Provider>;
}
