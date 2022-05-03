import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const logIn = (data) => setUser({ username: data.username });
  const logOut = () => setUser(null);
  const isLoggedIn = () => user !== null;

  const addTask = (data) =>
    setTasks((state) => [
      ...state,
      { id: Date.now(), text: data.task, isDone: false },
    ]);

  const checkTask = (id) => {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          return { ...task, isDone: !task.isDone };
        }

        return task;
      }),
    );
  };

  const deleteTask = (id) =>
    setTasks((state) => state.filter((task) => task.id !== id));

  const value = {
    user,
    logIn,
    logOut,
    isLoggedIn,
    tasks,
    addTask,
    checkTask,
    deleteTask,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}
