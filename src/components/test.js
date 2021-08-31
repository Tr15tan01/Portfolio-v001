import React from 'react';
// Import the BrowserRouter, Route and Link components
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import BlogJavascript from './blog-post-javascript.jsx';

function Navi() {
	return (
		<BrowserRouter>
			<div>
				{/* <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />  */}
				<Navigation />
			<BlogJavascript />
			</div>
		</BrowserRouter>
	);
}
 export default Navi;