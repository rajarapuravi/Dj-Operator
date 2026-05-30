import React, { useState } from "react";

function Image() {

  const [image, setImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  const saveImage = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {

      localStorage.setItem(
        "profileImage",
        reader.result
      );

      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="page">

      <h1>Upload Image</h1>

      <input
        type="file"
        accept="image/*"
        onChange={saveImage}
      />

      {image && (
        <img
          src={image}
          alt="Profile"
          className="profile-image"
        />
      )}

    </div>
  );
}

export default Image;