import { LOGO_URL } from "../utils/constants";
import Nav from "./Nav";

const Header = () => (
  <div className="header">
    <div className="logo">
      <img alt="logo-img" src={LOGO_URL}></img>
    </div>

    <Nav />
  </div>
);

export default Header;
