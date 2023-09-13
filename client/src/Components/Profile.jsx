import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const URL = "http://localhost:5000";
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/get-user`)
      .then((res) => {
        setProfile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Remove 'data' from the dependency array to prevent infinite calls
  console.log(profile);

  return (
    <>
      <div>
        <table className="table bordered striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {profile.map((item) => (
              <tr key={item._id}>
                <td>{item["name"]}</td>
                <td>
                  {item.image.map((img) => (
                    <img width={100} src={img.url} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Profile;
