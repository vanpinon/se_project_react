import "./Header.css";
import logo from "../../images/logo.png";
import avatar from "../../images/avatar.png";

function Header() {
  return (
    <header className="header">
      <img className="header__Logo" src={logo} alt="Logo" />
      <p className="header__date-and-location">Date, Location</p>
      <button className="header__add-clothes-btn">+ Add Clothes</button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          className="header__user-avatar"
          src={avatar}
          alt="Terrence Tegegne"
        />
      </div>
    </header>
  );
}

export default Header;
