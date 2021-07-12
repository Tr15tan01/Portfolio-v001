// App.jsx

import React from 'react';
// Import the BrowserRouter, Route and Link components
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Projects from './components/Projects.js';
import Articles from './components/Articles.js';
import Mainpage from './components/Mainpage.js';
import About from './components/About.jsx';
import Footer from './components/Footer.js';
import mouseMove from './js/mouseMove.js';

import './css/App.css';
import './js/navbar-scroll.js';

function App() {
	return (
		<BrowserRouter>
			<div onMouseMove={mouseMove}>
				{/* <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />  */}
				<Navigation />
				<Mainpage />
				<About />
				<Projects />
				<Articles />
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
