import './Assets/scss/style.scss';
import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPages from './Pages/LandingPages';



function App() {
	return (
		<Router>
			<Route path='/' component={LandingPages}></Route>
		</Router>
	);
}

export default App;
