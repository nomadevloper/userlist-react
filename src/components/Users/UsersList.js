import React from "react";
import User from "./User";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return <User user={user} key={user.id} />;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
