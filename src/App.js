import React, { useState, useSyncExternalStore } from "react";

import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [
  {
    id: "e1",
    username: "Colt",
    age: 12,
  },
  {
    id: "e2",
    username: "James",
    age: 32,
  },
];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      console.log(user);
      return [user, ...prevUsers];
    });
  };

  return (
    <div className="container">
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
