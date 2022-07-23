// Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Numbers from "./pages/Numbers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Component
const App = () => {

	// Return
	return(
		<Router>
			<Header/>
			<Hero/>
			<Routes>
				<Route path="/" element={ <Home/> }/>
				<Route path="/about" element={ <About/> }/>
				<Route path="/numbers" element={ <Numbers/> }/>
				<Route path="/contact" element={ <Contact/> }/>
			</Routes>
			<Footer/>
		</Router>
	);

};

// Export
export default App;