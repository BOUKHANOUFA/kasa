import { NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../assets/logo.svg"

 function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo Kasa" />

      <nav className="nav-header">

        <NavLink
          to="/"
          className>Accueil</NavLink>
        <NavLink
        to="/about"
        classNameA>A propos</NavLink>
        </nav>
    </header>
  )
}
export default Header