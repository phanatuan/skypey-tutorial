import React from "react";

const DisplayContactInfo = ({ contact }) => {
  const { name, status, profile_pic } = contact;
  return (
    <div>
      <img src={profile_pic} alt={name} />
      <p>{name}</p>
      <p>{status}</p>
      <hr />
    </div>
  );
};

export default DisplayContactInfo;
