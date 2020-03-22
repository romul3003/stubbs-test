import React from 'react'
import './Home.scss'
import Carousel from '../../components/Carousel/Carousel'
import Services from '../../components/Services/Services'
import OurCompany from '../../components/OurCompany/OurCompany'
import Footer from '../../components/Footer/Footer'

const Home = () => {
	return (
		<>
			<Carousel />
			<Services />
			<OurCompany />
			<Footer />
		</>
	)
}

export default Home
