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

  return (
    <ScrollToBottom>
      {messages.map(message => (
        <div>
          <Message message={message} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
