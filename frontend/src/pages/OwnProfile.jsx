import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { getOwnProfile } from "../api";
import Loading from "../presentations/Loading";

function OwnProfile() {
  const { user } = useContext(UserContext);
  console.log(user, "user111");
  // console.log(thisUser.username, "loggin in username");

  const [profileObj, setProfileObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOwnProfile(user)
      .then((response) => {
        console.log(response.data.usersData, "data");
        setProfileObj(response.data.usersData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [user]);

  if (isLoading) {
    return <Loading text={"your profile"} />;
  }
  return (
    <>
      <h2>Your Profile</h2>
      <p>*OwnProfile placeholder*</p>
    </>
  );
}

export default OwnProfile;
