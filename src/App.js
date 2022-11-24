
import React from 'react';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import JavascriptArticle from './components/JavascriptArticle';

import Home from './components/Home'
import Linker from './components/Linker'

import './css/App.css';
import './js/navbar-scroll.js';
import './js/mouseMove.js'

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/Portfolio-v001">
						<Home />
					</Route>
					<Route path="/linker">
						<Linker />
					</Route>
					<Route path="/:id">
						<JavascriptArticle />
					</Route>

				</Switch>
			</div>
		</Router>
	);
}

export default App;
