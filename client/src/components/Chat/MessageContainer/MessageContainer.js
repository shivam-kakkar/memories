import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, TextField, Button } from "@material-ui/core";
import Messages from "./Messages/Messages";
import { addMessage } from "../../../actions/messages";
import socket from "../../../socket";

const MessageContainer = () => {
  const onlineUsers = useSelector(state => state.online);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const user = onlineUsers.find(person => person.email === currentUser);
  const [messageBody, setMessageBody] = useState("");
  const selfUser = JSON.parse(localStorage.getItem("profile")).result;
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (messageBody) {
      const message = { from: selfUser.email, to: currentUser, messageBody: messageBody };
      dispatch(addMessage(message));
      socket.emit("sendMessage", message);
      setMessageBody("");
    }
  };
  useEffect(() => {
    socket.on("receiveMessage", message => {
      console.log(message.messageBody);
      dispatch(addMessage(message));
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  return !currentUser ? (
    <div
      style={{ display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <h2>Select a Chat to Start Messaging</h2>
    </div>
  ) : (
    <div>
      <h1 style={{ margin: 0, marginLeft: "20px" }}>{user?.name}</h1>
      <Divider />
      <div style={{ height: "476px", backgroundColor: "#E5DDD5", overflow: "auto" }}>
        <Messages />
      </div>
      <Divider />
      <div style={{ display: "flex" }}>
        <TextField
          value={messageBody}
          onChange={e => setMessageBody(e.target.value)}
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
