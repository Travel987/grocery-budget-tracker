import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header-inner">
        
        <h2 className="site-title">
          <span className="cart-icon">🛒</span>
          Grocery Budget Tracker
        </h2>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;