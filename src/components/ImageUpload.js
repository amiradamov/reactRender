import React, { useState } from "react";

const ImageUpload = ({ token }) => {
  const [image, setImage] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleImageUpload = async () => {
    try {
      if (!image) {
        setUploadStatus("Please select an image");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);

      const response = await fetch(
        "https://morning-plains-82582-f0e7c891044c.herokuapp.com/user/upload-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (response.ok) {
        setUploadStatus("Image uploaded successfully");
      } else {
        setUploadStatus("Failed to upload image");
      }
    } catch (error) {
      console.error("Error during image upload:", error);
      setUploadStatus("Error uploading image");
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleImageChange} accept="image/jpeg, image/png" />
      <button onClick={handleImageUpload}>Upload Image</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
