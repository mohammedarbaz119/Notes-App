import { Link } from "react-router-dom";
import "../css/nav.css";
export default function NavBar() {


    const toggler =()=>{
        const navbarLinks:HTMLDivElement = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active')
    }
  return (
    <nav className="navbar">
      <div className="brand-title">Notes App</div>
      <a href="#" className="toggle-button" onClick={toggler}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to={'/new'}>Create a New Note</Link>
          </li>
          <li>
            <Link to={'/'}>Notes</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
