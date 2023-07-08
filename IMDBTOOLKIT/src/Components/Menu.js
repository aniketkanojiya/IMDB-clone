import React from "react";
import { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';
 import './Menu.css';
const menuItems = [
    {
      title: "Movies"
    },
    {
      title: "TV Shows"
    },
    {
      title: "Awards & Event"
    },
    {
      title: "Celebs"
    },
    {
      title: "Videos"
    },
    {
      title: "Community"
    },
  ];
  
  const Menu = () => {
    const [showNav, setShowNav] = useState();
    return (
      <div className='xyz'>
        <div className="menu-icon">
          <MenuIcon onClick={() => setShowNav(true)} />
        </div>
        <SideNav
          showNav={showNav}
          onHideNav={() => setShowNav(false)}
      
          items={menuItems.map(({ title }, index) => (
              <div className="side-nav">
            <React.Fragment key={index}>
              <h4>{title}</h4>
            </React.Fragment>
            </div>
          ))}
        />
      </div>
    );
  };
export default Menu;