import { useState } from "react";

const Nav = () => {
  const [authBtn, setAuthBtn] = useState("Login");

  return (
    <div className="nav">
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
        <li>Account</li>
        <li>
          <button
            onClick={() => {
              authBtn === "Login" ? setAuthBtn("Logout") : setAuthBtn("Login");
            }}
          >
            {authBtn}
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
