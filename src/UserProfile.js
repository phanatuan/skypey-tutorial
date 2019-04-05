import React from "react";

const UserProfile = ({ user }) => {
  const { email, name, profile_pic, status, user_id } = user;
  return (
    <div>
      <img src={profile_pic} alt={name} />
      <h1>{name}</h1>
      <p>{email}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default UserProfile;
