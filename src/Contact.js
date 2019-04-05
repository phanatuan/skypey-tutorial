import React from "react";
import "./Contact.css";

const Contact = ({ contact, latestMessage, setActiveUserId }) => {
  const { profile_pic, name, user_id } = contact;
  return (
    <div onClick={setActiveUserId(user_id)}>
      <img src={profile_pic} alt={name} />
      <p>{name}</p>
      {latestMessage && <p>{latestMessage.text}</p>}
    </div>
  );
};

export default Contact;
