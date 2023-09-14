import React, { useEffect, useState } from "react";
import axios from "axios";
import PrfileCard from "./ProfileCard";

const Profile = () => {
  const URL = "http://localhost:5000";
  const [profile, setProfile] = useState([]);
  const [id, setId] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/get-user`)
      .then((res) => {
        setProfile(res.data.data);
        setId(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Remove 'data' from the dependency array to prevent infinite calls
  console.log(profile);
  return (
    <div className="pt-5">
      <div className="row d-flex justify-content-center item-center">
        {profile.map((item) => {
          return (
            <div className="col-md-3 d-flex gap-4 my-2 justify-content-center item-center">
              <PrfileCard
                key={item._id}
                name={item["name"]}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
