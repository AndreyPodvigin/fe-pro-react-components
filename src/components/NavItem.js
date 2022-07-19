import React from "react";

const navText = [
  {
    title: 'Home',
    link: '/',
    id: 1
  },
  {
    title: 'About us',
    link: '/#about',
    id: 2
  },
  {
    title: 'Contact us',
    link: '/#contact',
    id: 3
  },
  {
    title: 'Help page',
    link: '/#help',
    id: 4
  }
];

const NavItem = () => {
  return (<nav>
    <ul className="nav-list">
      {navText.map(({ title, link, id }) => {
        return <li key={id} className="nav-list__item">
          <a href={link} key={id}>{title}</a>
        </li>
      })}
    </ul>
  </nav>)
};

export default NavItem;