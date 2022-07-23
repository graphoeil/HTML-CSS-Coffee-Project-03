// Imports
import React, { useEffect } from "react";

// Component
const Numbers = () => {

	// Page title
	useEffect(() => {
		document.title = 'Coffee Project | Our stores';
	},[]);

	// Return
	return(
		<section>
			<h1>Our stores</h1>
			<table style={ { border:'2px solid black', borderSpacing:'25px', textAlign:'center' } }>
				<thead>
					<tr>
						<th>City</th>
						<th>Chicago</th>
						<th>New-York</th>
						<th>Los Angeles</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Orders</td>
						<td>125</td>
						<td>250</td>
						<td>500</td>
					</tr>
					<tr>
						<td>Profit</td>
						<td>$10,000</td>
						<td>$20,000</td>
						<td>$30,000</td>
					</tr>
				</tbody>
			</table>
		</section>
	);

};

// Export
export default Numbers;