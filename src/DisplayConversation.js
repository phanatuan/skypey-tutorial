import React from "react";
import _ from "lodash";

const displayConversation = ({
  message,
  handleMessageInput,
  handleSubmitMessage,
  activeUserId,
  typing
}) => {
  const messageArray = _.values(message);
  return (
    <div>
      {messageArray.map(message => {
        return (
          <p key={message.number} className='belongToUser'>
            {message.text}
          </p>
        );
      })}
      <input
        placeholder='new message'
        onChange={handleMessageInput}
        value={typing}
      />
      <button onClick={handleSubmitMessage(activeUserId)}>Send</button>
    </div>
  );
};

export default displayConversation;
