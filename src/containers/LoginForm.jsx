import { useState } from "react";
import { LoginForm as Component } from "../components/LoginForm";

export function LoginForm(props) {
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
    props.onLogin(state);
  };

  return <Component onSubmit={handleSubmit} onChange={handleChange} />;
}