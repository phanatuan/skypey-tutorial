import React from "react";
import "./Main.css";
import UserProfile from "./UserProfile";
import ConversationView from "./ConversationView";

const Main = ({
  user,
  messageByActiveUserId,
  handleMessageInput,
  handleSubmitMessage,
  activeUserId,
  typing,
  contactInfoByActiveUserId
}) => {
  return (
    <main className='Main'>
      {!activeUserId ? (
        <UserProfile user={user} />
      ) : (
        <ConversationView
          message={messageByActiveUserId}
          handleMessageInput={handleMessageInput}
          handleSubmitMessage={handleSubmitMessage}
          activeUserId={activeUserId}
          typing={typing}
          contactInfoByActiveUserId={contactInfoByActiveUserId}
        />
      )}
    </main>
  );
};

export default Main;
