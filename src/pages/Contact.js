// Imports
import React, { useEffect, useRef } from "react";

// Component
const Contact = () => {

	// Page title
	useEffect(() => {
		document.title = 'Coffee Project | Contact';
	},[]);

	// Submit form
	const nameRef = useRef();
	const emailRef = useRef();
	const messageRef = useRef();
	const submitForm = (e) => {
		e.preventDefault();
		console.log(`Name : ${ nameRef.current.value }`);
		console.log(`Email : ${ emailRef.current.value }`);
		console.log(`Message : ${ messageRef.current.value }`);
		nameRef.current.value = '';
		emailRef.current.value = '';
		messageRef.current.value = '';
	};

	// Return
	return(
		<section>
			<h1>Contact</h1>
			<form onSubmit={ submitForm }>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" id="name" ref={ nameRef } />
				<br /><br />
				<label htmlFor="name">Email</label>
				<input type="email" name="email" id="email" ref={ emailRef } />
				<br /><br />
				<label htmlFor="message">Your message</label><br />
				<textarea name="message" id="message" ref={ messageRef } />
				<br /><br />
				<button type="submit">Send</button>
			</form>
		</section>
	);

};

// Export
export default Contact;