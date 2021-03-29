import React, { useEffect } from "react";
import useStyles from "./styles";

const Message = ({ message }) => {
  const classes = useStyles();
  const selfEmail = JSON.parse(localStorage.getItem("profile")).result.email;
  const senderEmail = message.from;
  const messageBody = message.messageBody;

  return selfEmail === senderEmail ? (
    <div style={{ justifyContent: "flex-end" }} className={classes.messageContainer}>
      <span style={{ backgroundColor: "#5F0A87", color: "white" }} className={classes.messageBox}>
        {messageBody}
      </span>
    </div>
  ) : (
    <div className={classes.messageContainer}>
      <span className={classes.messageBox} style={{ backgroundColor: "white" }}>
        {messageBody}
      </span>
    </div>
  );
};

export default Message;
