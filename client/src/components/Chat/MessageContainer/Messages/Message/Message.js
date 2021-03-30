import React from "react";
import useStyles from "./styles";

const Message = ({ message }) => {
  const classes = useStyles();
  const selfEmail = JSON.parse(localStorage.getItem("profile")).result.email;
  const senderEmail = message.from;
  const messageBody = message.messageBody;

  return selfEmail === senderEmail ? (
    <div style={{ justifyContent: "flex-end" }} className={classes.messageContainer}>
      <span className={`${classes.messageBox} ${classes.backgroundBlue}`}>{messageBody}</span>
    </div>
  ) : (
    <div className={classes.messageContainer}>
      <span className={classes.messageBox} style={{ backgroundColor: "#EDEDED" }}>
        {messageBody}
      </span>
    </div>
  );
};

export default Message;
