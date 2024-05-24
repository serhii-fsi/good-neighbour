import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/User";
import { getProfile } from "../api";
import Loading from "../presentations/Loading";

function OwnProfile() {
  const { thisUser } = useContext(UserContext);
  console.log(thisUser, "thisUser");
  // console.log(thisUser.username, "loggin in username");

  const [profileObj, setProfileObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProfile().then((response) => {
      console.log(response.data.usersData, "data");
      setProfileObj(response.data.usersData);
      setIsLoading(false);
    });
  }, [thisUser]);

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
