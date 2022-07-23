// Imports
import React, { useEffect } from "react";
import columbian from "../images/columbian-roast.jpeg";
import french from "../images/french-roast.jpeg";
import house from "../images/house-blend.jpeg";
import Product from "../components/Product";

// Component
const Home = () => {

	// Page title
	useEffect(() => {
		document.title = 'Coffee Project | Home';
	},[]);

	// Return
	return(
		<section>
			<h2>Featured products</h2>
			<Product title="House blend coffee" image={ house }/>
			<Product title="French roasted" image={ french }/>
			<Product title="Columbian roasted" image={ columbian }/>
		</section>
	);

};

// Export
export default Home;