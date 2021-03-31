import React, { useEffect } from "react";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = () => {
  const allMessages = useSelector(state => state.messages);
  const currentUser = useSelector(state => state.currentSelected.currentUser);

  const messages = allMessages.filter(
    message => message.to === currentUser || message.from === currentUser
  );

  // useEffect(() => {
  //   console.log(allMessages);
  // }, [allMessages]);

  return (
    <ScrollToBottom className="messageDiv">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
