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
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          A propos
        </NavLink>

      </nav>
    </header>
  )
}