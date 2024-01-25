import React from "react";
import ImageUploadAndUserInfo from "./components/ImageUpload";

const App = () => {
  // Provide a sample token for testing
  const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwNjE5MjQzMSwianRpIjoiY2JkZWJiYjItOWI3ZC00MDM3LWFjYjMtODM3ZTAyMWIxZjI1IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImFhZGFtb3YiLCJuYmYiOjE3MDYxOTI0MzEsImV4cCI6MTcwNjE5NjAzMX0.NK_ortUuMxYG3cP9mnZresnlMRe_pk-4rqdwMl5xf-I";

  return (
    <div>
      <h1>Your App Title</h1>
      <ImageUploadAndUserInfo token={sampleToken} />
    </div>
  );
};

export default App;
