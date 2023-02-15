import React from "react";

import classes from "./User.module.css";

const User = (props) => {
  return (
    <li className={classes.user}>
      {props.user.username} ({props.user.age} years old)
    </li>
  );
};

export default User;
