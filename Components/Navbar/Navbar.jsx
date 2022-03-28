import { Link } from "react-router-dom";
import './Nav.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbarHome" to={"/"}>
        <button>Home</button>
      </Link>
      <Link className="navbarLoginSignUp" to={"/loginsignup"}>
        <button>Login/Sign Up</button>
      </Link>
    </div>
  );
};
