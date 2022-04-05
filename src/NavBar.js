import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar () {
	return (
		<nav className="NavBar">
			<NavLink to="/">
				Home
      </NavLink>
			<NavLink to="/eat">
				Eat
      </NavLink>
			<NavLink to="/drink">
				Drink
      </NavLink>
		</nav>
	);
}

export default NavBar;
