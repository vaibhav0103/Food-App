import { useState } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";

const Nav = () => {
  const [authBtn, setAuthBtn] = useState("Login");
  const isOnline = useStatus()

  return (
    <div>
      <ul className="flex flex-wrap m-4 p-4">
        <li className="bg-blue-300 p-2 mx-2 rounded-md text-white hover:bg-blue-500 ">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-blue-300 p-2 mx-2 rounded-md text-white hover:bg-blue-500 ">
          <Link to="/about">About</Link>
        </li>
        <li className="bg-blue-300 p-2 mx-2 rounded-md text-white hover:bg-blue-500 ">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="bg-blue-300 p-2 mx-2 rounded-md text-white hover:bg-blue-500 ">
          Account
        </li>
        <li className="bg-blue-300 p-2 mx-2 rounded-md text-white hover:bg-blue-500 ">
          <button
            onClick={() => {
              authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
            }}
          >
            {authBtn}
          </button>
        </li>
        <li className="font-extrabold flex items-center">
            {isOnline ? <span className="bg-green-400 rounded-[50%] w-4 h-4"></span> : <span className="bg-red-500 rounded-[50%] w-4 h-4"></span>}
        </li>
      </ul>
    </div>
  );
};
export default Nav;
