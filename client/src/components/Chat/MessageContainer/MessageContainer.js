import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider, TextField, Button } from "@material-ui/core";

const MessageContainer = () => {
  const users = useSelector(state => state.users);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const user = users.find(person => person._id === currentUser);

  return !user ? (
    <div
      style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <h2>Select a Chat to Start Messaging</h2>
    </div>
  ) : (
    <div>
      <h1 style={{ marginLeft: "20px" }}>{user.name}</h1>
      <Divider />
      <div style={{ height: "476px", backgroundColor: "#E5DDD5" }}></div>
      <Divider />
      <div style={{ display: "flex" }}>
        <TextField variant="outlined" size="small" placeholder="Type a message" fullWidth />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </div>
    </div>
  );
};

export default MessageContainer;
