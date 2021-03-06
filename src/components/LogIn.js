import React, { useState } from "react";
import { Form, Label, Input } from "./Form";
import Button from "./Button";
import Error from "./ErrorMessage";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function onChange(event) {
    setValue(event.target.value);
  }

  return [value, setValue, onChange];
}

function logIn() {
  // nope
}

function LogIn({ navigate }) {
  // eslint-disable-next-line
  const [email, setEmail, onChangeEmail] = useInput('')
  // eslint-disable-next-line
  const [password, setPassword, onChangePassword] = useInput('')
  const [error, setError] = useState();
  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        logIn({ email, password })
          .then(() => {
            navigate("/add-wish");
          })
          .catch(error => setError(error));
      }}
    >
      <Error error={error} />
      <Label htmlFor="email">
        Email
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
          required
        />
      </Label>
      <Label htmlFor="password">
        Password
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
}

export default LogIn;
