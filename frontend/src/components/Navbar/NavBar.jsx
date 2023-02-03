import { NavLink } from "react-router-dom";
import "./Navbar.css";
import myavatar from "../../assets/myavatar.png";

function NavBar() {
  return (
    <div>
      <div className="BurgerMenu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div>
        <div className="navbar">
          <div className="logo">
            <img src={myavatar} alt="profil" />
          </div>

          <ul className="allText">
            <li>
              <NavLink to="/" className="navbarText">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="navbarText">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="navbarText">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
