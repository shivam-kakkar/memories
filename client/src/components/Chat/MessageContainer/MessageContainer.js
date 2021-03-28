import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Divider, TextField, Button } from "@material-ui/core";
import Messages from "./Messages/Messages";

const MessageContainer = () => {
  const onlineUsers = useSelector(state => state.online);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const user = onlineUsers.find(person => person.userId === currentUser);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message) {
      console.log(message);
      setMessage("");
    }
  };

  return !currentUser ? (
    <div
      style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <h2>Select a Chat to Start Messaging</h2>
    </div>
  ) : (
    <div>
      <h1 style={{ margin: 0, marginLeft: "20px" }}>{user.name}</h1>
      <Divider />
      <div style={{ height: "476px", backgroundColor: "#E5DDD5" }}>
        <Messages />
      </div>
      <Divider />
      <div style={{ display: "flex" }}>
        <TextField
          value={message}
          onChange={e => setMessage(e.target.value)}
          variant="outlined"
          size="small"
          placeholder="Type a message"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default MessageContainer;
