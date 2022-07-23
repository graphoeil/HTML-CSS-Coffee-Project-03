// Imports
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

// Component
const Header = () => {

	// Return
	return(
		<header id="top">
			<img src={ logo } alt="Coffee logo" />
			<h1>Coffee junkie</h1>
			<nav>
				<ul>
					<li>
						<NavLink to="/" className={ ({ isActive }) => {
							return isActive ? 'active' : '';
						} }>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className={ ({ isActive }) => {
							return isActive ? 'active' : '';
						} }>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/numbers" className={ ({ isActive }) => {
							return isActive ? 'active' : '';
						} }>
							Numbers
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className={ ({ isActive }) => {
							return isActive ? 'active' : '';
						} }>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);

};

// Export
export default Header;