import React from "react";
import "./Header.css";

function Header(): JSX.Element {
  return (
    <header id="Header">
      <div id="Header--logo">
        <a href="#home">Church Logo</a>
      </div>
      <nav id="Header--navigation">
        <ul>
          <li>
            <a href="#visit-section">Plan Your Visit</a>
          </li>
          <li>
            <a href="#events-section">Events</a>
          </li>
          <li>
            <a href="#contact-section">Get In Touch</a>
          </li>
          <li>
            <a className="button" href="#connect">
              Connect on Facebook
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
