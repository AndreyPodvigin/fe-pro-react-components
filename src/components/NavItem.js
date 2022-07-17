import React from "react";

const navText = [['Home', '/'], ['About us', '/#about'], ['Contact us', '/#contact'], ['Help page', '/#help']];

const NavItem = () => {
  return <nav>
    <ul className="nav-list">
      {navText.map(([title, link], index) => {
        return <li key={index} className="nav-list__item">
          <a href={link} key={index}>{title}</a>
        </li>
      })}
    </ul>
  </nav>
};

export default NavItem;