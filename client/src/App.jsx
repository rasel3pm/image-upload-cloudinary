import axios from "axios";
import React, { useState } from "react";

const App = () => {
  let URL = "http://localhost:5000";
  const [name, setName] = useState("");
  const [image, setImage] = useState(null); // Use null initially for image state

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image); // Append the image file correctly

    axios
      .post(`${URL}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the Content-Type header
        },
      })
      .then((response) => {
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file); // Update 'image' state with the selected file
          }}
          placeholder="image"
        />

        <button type="submit">Submit</button>
      </form>
      <div>
        <span>Image</span>
        <img src={image} />
      </div>
    </div>
  );
};

export default App;
