import React from 'react';

function Header() {
  return (
    <header className="header-container">
      <div className="header-flex-container">
        <h1 className="header-title">YATRA</h1>
        <nav className="header-nav">
          <button className="header-nav-button">Destinations</button>
          <button className="header-nav-button">Activities</button>
          <button className="header-nav-button">USD</button>
          <button className="header-nav-button">Sign up</button>
          <button className="header-nav-button active">Log in</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
