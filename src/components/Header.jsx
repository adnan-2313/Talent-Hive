import { Link } from "react-router-dom";
import logo from "../../public/Logo.png";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="flex p-4  justify-between items-center">
        <Link>
          <img src={logo} alt="" className="h-28" />
        </Link>
        <Button variant="outline">Login</Button>
      </nav>
    </>
  );
};

export default Header;
