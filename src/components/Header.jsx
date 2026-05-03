import { NavLink } from "react-router-dom"
import "./Header.css"
import logo from "../assets/logo.svg"

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo Kasa" />

      <nav className="nav-header">

        <NavLink
          to="/"
          className>Accueil</NavLink>
        <NavLink
        to="/about"
        classNameA> propos</NavLink>
        </nav>
    </header>
  )
}