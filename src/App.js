import { useContext } from "react";
import { LoginForm } from "./containers/LoginForm";
import { TaskForm } from "./containers/TaskForm";
import { Task } from "./components/Task";
import { AppContext } from "./contexts/AppContext";

export function App() {
  const appContext = useContext(AppContext);

  return (
    <div>
      <LoginForm onLogin={appContext.logIn} />
      <TaskForm onAdd={appContext.addTask} />
      {appContext.tasks.map((task) => (
        <Task
          key={task.id}
          isDone={task.isDone}
          onCheck={() => appContext.checkTask(task.id)}
          onDelete={() => appContext.deleteTask(task.id)}
        >
          {task.text}
        </Task>
      ))}
    </div>
  );
}
