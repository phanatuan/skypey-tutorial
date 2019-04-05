import React from "react";
import DisplayConversation from "./DisplayConversation";
import DisplayContactInfo from "./DisplayContactInfo";

const ConversationView = ({
  message,
  handleMessageInput,
  handleSubmitMessage,
  activeUserId,
  typing,
  contactInfoByActiveUserId
}) => {
  return (
    <div>
      {contactInfoByActiveUserId && <DisplayContactInfo contact={contactInfoByActiveUserId} />}
      <DisplayConversation
        message={message}
        handleMessageInput={handleMessageInput}
        handleSubmitMessage={handleSubmitMessage}
        activeUserId={activeUserId}
        typing={typing}
      />
    </div>
  );
};

export default ConversationView;
