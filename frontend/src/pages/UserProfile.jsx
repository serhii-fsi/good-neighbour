import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../api";
import Loading from "../presentations/Loading";

function UserProfile() {
  const { user_id } = useParams();
  console.log(user_id, "user_id");

  const [profileObj, setProfileObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserProfile(user_id)
      .then((response) => {
        setProfileObj(response.data.usersData, "data");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <Loading text={"profile"} />;
  }
  return (
    <>
      <h2>{} Profile</h2>
      <p>*UserProfile placeholder*</p>
    </>
  );
}

export default UserProfile;
