import { useState } from "react";
import { TaskForm as Component } from "../components/TaskForm";

export function TaskForm(props) {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(state);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}
