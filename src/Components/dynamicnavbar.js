import React, { useState } from 'react';
import './dynamicnavbar.css'; 

const Dynamicnavbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products',
      id: 'product',
      child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ],
    },
    { name: 'Contact Us', id: 'contact' },
  ];

  return (
    <nav>
        <div
        className={`hamburger${isNavOpen ? ' open' : ''}`}
        onClick={() => setIsNavOpen(!isNavOpen)} // Toggle navbar open/close
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar navbar-container-menu${isNavOpen ? ' open' : ''}`}>
        {navbar.map(item => (
          <NavItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
};

const NavItem = ({ item }) => {
  if (item.child) {
    return (
      <li className="nav-item nav-list">
        <a href={`#${item.id}`}>{item.name}</a>
        <ul className="sub-menu child-menu">
          {item.child.map(childItem => (
            <NavItem key={childItem.id} item={childItem} /> 
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li className="nav-item nav-list">
      <a href={`#${item.id}`}>{item.name}</a>
    </li>
  );
};

export default Dynamicnavbar;
