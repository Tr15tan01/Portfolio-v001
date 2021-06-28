// App.jsx

import React from 'react';
// Import the BrowserRouter, Route and Link components
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation.js';
import Projects from './Projects.js';
import Articles from './Articles.js';
import Mainpage from './Mainpage.js';
import About from './About.js';
import Footer from './Footer.js';
import mouseMove from './js/mouseMove.js';

import './App.css';
import './js/navbar-scroll.js';

function App() {
	return (
		<BrowserRouter>
			<div className="App" onMouseMove={mouseMove}>
				{/* <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />  */}
				<Navigation />
				<Mainpage />
				<Projects />
				<Articles />
				<About />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
