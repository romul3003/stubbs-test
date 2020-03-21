import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel'

function App() {
	return (
		<Router>
			<Header />
			<main>
				<Carousel />
			</main>
		</Router>
	)
}

export default App
