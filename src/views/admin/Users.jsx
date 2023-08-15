import React, { useState } from "react";
import { getUsers } from "../../services/users";
import Button from "react-bootstrap/Button";

import { ListGroup, ListGroupItem } from "react-bootstrap";
const Users = () => {
  const [users, setUsers] = useState([]);
  const handleUsers = async () => {
    const data = await getUsers();
    console.log(data.users);
    setUsers(data.users);
  };

  return (
    <div className="container">
      <h1>panel de usuarios</h1>
      <Button variant="primary" onClick={handleUsers}>
        Users
      </Button>
      <ListGroup className="mt-3">
        {users.map((user) => {
          return (
            <ListGroupItem header="Heading 2" key={user._id}>
              UserName: {user.userName}, email: {user.email}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Users;
