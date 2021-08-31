
import React from 'react';
// Import the BrowserRouter, Route and Link components
// import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import JavascriptArticle from './components/Articles/JavascriptArticle';

// import Navigation from './components/Navigation.js';
// import Projects from './components/Projects.js';
// import Articles from './components/Articles.jsx';
// import Mainpage from './components/Mainpage.js';
// import About from './components/About.jsx';
// import Footer from './components/Footer.jsx';

import Home from './components/Home'
import mouseMove from './js/mouseMove.js';
import Linker from './components/Linker'

import './css/App.css';
import './js/navbar-scroll.js';

function App() {
	return (
		<Router>
			<div>
				{/* <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />  */}
				<Switch>
					<Route exact path="/Portfolio-v001">
						<Home />
					</Route>
					<Route path="/linker">
						<Linker />
					</Route>
					<Route path="/javascriptarticle">
						<JavascriptArticle />
					</Route>
					{/* <Navigation />
					<Mainpage />
					<About />
					<Projects />
					<Articles />
					<Footer /> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
