import React from "react";

import logo from "../assets/facebook-logo-1.png";

function Header() {
  return (
    <header>
      <img src={logo} width="150px" />
      <nav>
        <div>
          <span>Meu Perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
