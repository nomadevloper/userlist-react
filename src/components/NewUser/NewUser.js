import React, { useState } from "react";
import UserForm from "./UserForm";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./NewUser.module.css";

const NewUser = (props) => {
  const [error, setError] = useState();

  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    props.onAddUser(userData);
  };

  const throwErrorHandler = (error) => {
    setError(error);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <UserForm
          onSaveUserData={saveUserDataHandler}
          onThrowError={throwErrorHandler}
        />
      </Card>
    </div>
  );
};

export default NewUser;
