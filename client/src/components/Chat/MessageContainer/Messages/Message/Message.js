import React, { useEffect } from "react";

const Message = ({ message }) => {
  const selfEmail = JSON.parse(localStorage.getItem("profile")).result.email;
  const senderEmail = message.from;
  const messageBody = message.messageBody;

  return selfEmail === senderEmail ? (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "5px",
        margin: "5px 0",
      }}
    >
      <span style={{ backgroundColor: "green", padding: "10px", borderRadius: "10px" }}>
        {messageBody}
      </span>
    </div>
  ) : (
    <div
      style={{
        padding: "5px",
        margin: "5px 0",
        borderRadius: "10px",
      }}
    >
      <span style={{ backgroundColor: "white", padding: "5px", borderRadius: "10px" }}>
        {messageBody}
      </span>
    </div>
  );
};

export default Message;
