import React from 'react';
import { Link } from 'react-router-dom';

const Linker = () => {
	return (
		<div>
			<h2>This is a Linker component</h2>
			<Link to="/Portfolio-v001">Home</Link>
		</div>
	);
};

export default Linker;
