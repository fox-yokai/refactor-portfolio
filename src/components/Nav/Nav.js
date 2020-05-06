import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Nav.css';

const NavBar = (props) => {
  return (
    <div>
      <Nav className="navbar navbar-expand-sm navbar-background">
      <p className="navbar-brand darkText">Patrick Cain</p>
      <div className="nav navbar-nav ml-auto w-100 justify-content-end">
      <NavItem>
          <NavLink className="lightText" href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="lightText" href="#">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="lightText" href="#">Contact</NavLink>
        </NavItem>
      </div>
      </Nav>
      <hr />
    </div>
  );
}

export default NavBar;