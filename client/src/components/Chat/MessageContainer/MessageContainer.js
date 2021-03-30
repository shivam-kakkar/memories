import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import Messages from "./Messages/Messages";
import { addMessage } from "../../../actions/messages";
import socket from "../../../socket";
import onlineIcon from "../../../icons/onlineIcon.png";
import useStyles from "./styles";

const MessageContainer = () => {
  const classes = useStyles();
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
      console.log("received");
      console.log(message.messageBody);
      dispatch(addMessage(message));
    });
    return () => {
      socket.off("receiveMessage");
    };
  }, []);

  return !currentUser || onlineUsers.length === 0 ? (
    <div className={classes.beforeChat}>
      {onlineUsers.length !== 0 && <h2>Select a Chat to Start Messaging</h2>}
    </div>
  ) : (
    <div style={{ height: "100%" }}>
      <div className={classes.afterChat}>
        <img src={onlineIcon} alt="online icon" />
        <h2 className={classes.chatUser}>{user?.name}</h2>
      </div>
      <div className={classes.messagesContainer}>
        <Messages />
      </div>
      <div style={{ display: "flex", backgroundColor: "#FFFFFF" }}>
        <TextField
          value={messageBody}
          onChange={e => setMessageBody(e.target.value)}
          variant="outlined"
          size="small"
          placeholder="Type a message..."
          fullWidth
          onKeyPress={event => (event.key === "Enter" ? sendMessage() : null)}
        />
        <Button className={classes.sendButton} onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default MessageContainer;
