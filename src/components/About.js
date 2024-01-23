import { useEffect, useState } from "react";
// import User from "./User";
import UserClass from "./UserClass";
import { GITHUB_USER_INFO } from "../utils/constants";

const About = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetchUserData();
  },[]);

  const fetchUserData = async () => {
    const data = await fetch(GITHUB_USER_INFO);
    const json = await data.json();
    setUserInfo(json);
  }
  const {name, location, login} = userInfo
  return (
    <div>
      {/* <User name={"Vaibhav"} location={"India"} contact={"@vaibhav01"} /> */}
      <UserClass name={name} location={location} contact={login} />
    </div>
  );
};

export default About;
