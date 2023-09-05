import { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState(""); // Initialize with an empty string
  const [image, setImage] = useState(""); // Initialize with an empty string
  console.log(name);
  const handleSubmit = (e) => {
    console.log("jhghjkjk");
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    console.log(formData);
    // axios
    //   .post("http://localhost:5000/register", formData)
    //   .then((response) => {
    //     console.log("Data posted successfully:", response.data);
    //   })
    //   .catch((error) => {
    //     console.error("Error posting data:", error);
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="post">
        <input
          onChange={(e) => setName(e.target.value)} // Update 'name' state directly
          type="text"
          placeholder="name"
          name="name"
          value={name}
        />
        <input
          onChange={(e) => {
            let reader = new FileReader();
            reader.onload = () => {
              setImage(reader.result); // Update 'image' state directly
            };
            reader.readAsDataURL(e.target.files[0]);
          }}
          type="file"
          accept="image/*"
          placeholder="Choose an image file"
          name="image"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
