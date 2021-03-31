import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button, Tooltip } from "@material-ui/core";
import Messages from "./Messages/Messages";
import { setMessages } from "../../../actions/messages";
import socket from "../../../socket";
import onlineIcon from "../../../icons/onlineIcon.png";
import useStyles from "./styles";
import { getMessages } from "../../../api/index";
import Picker from "emoji-picker-react";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";

const MessageContainer = () => {
  const classes = useStyles();
  const [emojiDrawer, setEmojiDrawer] = useState(false);
  const onlineUsers = useSelector(state => state.online);
  const currentUser = useSelector(state => state.currentSelected.currentUser);
  const user = onlineUsers.find(person => person.email === currentUser);
  const [messageBody, setMessageBody] = useState("");
  const selfUser = JSON.parse(localStorage.getItem("profile"))?.result;
  const dispatch = useDispatch();

  const sendMessage = () => {
    if (messageBody) {
      const message = { from: selfUser.email, to: currentUser, messageBody: messageBody };
      socket.emit("sendMessage", message);
      setMessageBody("");
    }
  };

  const onEmojiClick = (event, emojiObject) => {
    console.log(emojiObject.emoji);
    const updatedMessage = messageBody + emojiObject.emoji;
    setMessageBody(updatedMessage);
  };

  useEffect(() => {
    socket.on("setMessage", messages => {
      dispatch(setMessages(messages));
    });
    return () => {
      socket.off("setMessage");
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const email = JSON.parse(localStorage.getItem("profile"))?.result?.email;
      if (email) {
        const { data } = await getMessages(email);
        if (data) {
          console.log(data);
          dispatch(setMessages(data));
        }
      }
    }
    fetchData();
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
      <div className={classes.messagesContainer} style={{ position: "relative" }}>
        <Messages />
        <div
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            display: emojiDrawer ? "block" : "none",
          }}
        >
          <Picker disableSearchBar={true} onEmojiClick={onEmojiClick} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <Tooltip title="Insert an emoji">
          <SentimentSatisfiedIcon
            size="large"
            style={{ margin: "0 5px", cursor: "pointer" }}
            onClick={() => setEmojiDrawer(!emojiDrawer)}
          />
        </Tooltip>
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
