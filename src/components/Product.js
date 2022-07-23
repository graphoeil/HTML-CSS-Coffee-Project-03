// Imports
import React from "react";

// Component
const Product = ({ title, image }) => {

	// Return
	return(
		<article>
			<h2>{ title }</h2>
			<img src={ image } alt={ title } />
			<p style={ { width:'330px' } }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt soluta impedit 
				neque reiciendis amet, quisquam suscipit. Aperiam, ea, neque ad dolor ab 
				consequuntur accusantium tenetur numquam tempore ducimus officia molestiae?</p>
			<h4>
				<a href="https://en.wikipedia.org/wiki/Coffee" target="_blank" rel="noreferrer noopener">
					Details
				</a>
			</h4>
		</article>
	);

};

// Export
export default Product;