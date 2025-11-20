import "./style/NavBar.css";
import logo from "../assets/logo/logo.png";

export default function Navbar() {
  return (
    <div className="mt-navbar-wrapper d-flex justify-content-center">
      <nav className="mt-navbar d-flex align-items-center justify-content-between">

        {/* Liens gauche */}
        <div className="d-flex gap-4 mt-links">
          <a href="/" className="mt-nav-link">Home</a>
          <a href="/cards" className="mt-nav-link">Cartes</a>
        </div>

        {/* Logo centre */}
        <div className="mt-logo-container">
          <img src={logo} alt="logo" className="mt-logo" />
        </div>

        {/* Liens droite */}
        <div className="d-flex gap-4 mt-links">
          <a href="/leaders" className="mt-nav-link">Leaders</a>
          <a href="/about" className="mt-nav-link">About</a>
        </div>

      </nav>
    </div>
  );
}
