import React from "react";
import ContactList from "./ContactList";
import "./Sidebar.css";

const Sidebar = ({ contacts, messages, setActiveUserId }) => {
  return (
    <aside className='Sidebar'>
      <ContactList
        contacts={contacts}
        messages={messages}
        setActiveUserId={setActiveUserId}
      />
    </aside>
  );
};

export default Sidebar;
