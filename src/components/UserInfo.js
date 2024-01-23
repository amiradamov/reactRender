import React from "react";

const UserInfo = ({ personalInfo }) => {
  return (
    <div>
      <h2>User Info</h2>
      <p>Full Name: {personalInfo.fullName}</p>
      <p>Username: {personalInfo.username}</p>
      <p>Email: {personalInfo.emailAddress}</p>
      <img src={personalInfo.profileImage} alt="Profile" />
    </div>
  );
};

export default UserInfo;
