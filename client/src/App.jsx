import axios from "axios";
import React, { useState } from "react";
import Profile from "./Components/Profile";
import swal from "sweetalert";

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
        swal({
          icon: "success",
          title: "Success",
        });
        console.log("Data posted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        swal({
          icon: "error",
          title: "Something went wrong",
        });
      });
  };

  return (
    <div className="container pt-5 ">
      <form action="" onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <input
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                setImage(file); // Update 'image' state with the selected file
              }}
              placeholder="image"
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-success" type="submit">
              Upload
            </button>
          </div>
        </div>
      </form>
      <Profile />
    </div>
  );
};

export default App;
