import React from "react";

const navText = [['Home', '/'], ['About us', '/#about'], ['Contact us', '/#contact'], ['Help page', '/#help']];

const NavItem = () => {
  let i = 0;
  return <nav>
    <ul className="nav-list">
      {navText.map(([title, link]) => {
        return <li key={i++} className="nav-list__item">
          <a href={link} key={i++}>{title}</a>
        </li>
      })}
    </ul>
  </nav>
};

export default NavItem;