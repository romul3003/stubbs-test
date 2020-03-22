import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Home />
			</main>
		</Router>
	)
}

export default App
