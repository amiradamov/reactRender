import React, { useState, useEffect } from "react";
import ImageUpload from "./components/ImageUpload";
import UserInfo from "./components/UserInfo";

const MainComponent = () => {
  const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNjA0NDMwOSwianRpIjoiYTViNzNhNmQtY2I2OS00YTUyLWJjYWMtMTE4M2U5ZTUwZGE5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFhZGFtb3YiLCJuYmYiOjE3MDYwNDQzMDksImV4cCI6MTcwNjA0NzkwOX0.SMpNZ_Hkhr_LdhDAB0vaox6PU645qrNowJeC21U0DS0");
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    username: "",
    emailAddress: "",
    profileImage: "",
  });

  const fetchUserInfo = async (authToken) => {
    try {
      const response = await fetch(
        "https://morning-plains-82582-f0e7c891044c.herokuapp.com/user/info",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();
        setPersonalInfo({
          fullName: result.user_info.user_name,
          username: result.user_info.user_username,
          emailAddress: result.user_info.user_email,
          profileImage: result.user_info.user_img,
        });
      } else {
        console.error("Error fetching user info:", response.statusText);
      }
    } catch (error) {
      console.error("Error during user info fetch:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserInfo(token);
    }
  }, [token]);

  return (
    <div>
      <h1>Your App Title</h1>
      <ImageUpload token={token} />
      <UserInfo personalInfo={personalInfo} />
    </div>
  );
};

export default MainComponent;
