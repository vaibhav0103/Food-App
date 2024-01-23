import { LOGO_URL } from "../utils/constants";
import Nav from "./Nav";

const Header = () => (
  <div className="flex justify-between bg-gray-100">
    <div className="logo w-32 m-2 p-2">
      <img alt="logo-img" src={LOGO_URL}></img>
    </div>

    <Nav />
  </div>
);

export default Header;
