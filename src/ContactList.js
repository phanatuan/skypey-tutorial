import React from "react";
import Contact from "./Contact";

const ContactList = ({ contacts, messages, setActiveUserId }) => {
  const mapContacts = Object.values(contacts);
  return (
    <div>
      {mapContacts.map(contact => (
        <Contact
          key={contact.user_id}
          contact={contact}
          latestMessage={
            messages[contact.user_id][
              Object.values(messages[contact.user_id]).length - 1
            ]
          }
          setActiveUserId={setActiveUserId}
        />
      ))}
    </div>
  );
};

export default ContactList;
