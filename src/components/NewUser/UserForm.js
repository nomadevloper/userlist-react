import React, { useState } from "react";
import Button from "../UI/Button";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // alert("Please enter a valid name and age (non-empty values).");
      const error = {
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      };
      props.onThrowError(error);
      return;
    }
    if (+enteredAge < 1) {
      const error = {
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      };
      props.onThrowError(error);
      return;
    }

    const userData = {
      username: enteredUsername,
      age: enteredAge,
    };

    props.onSaveUserData(userData);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes["content-container"]}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>
      </div>
      <div className={classes["content-container"]}>
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
