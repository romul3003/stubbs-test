import React from 'react'
import './Services.scss'
import Gallery from './Gallery/Gallery'

const Services = () => {
	return (
		<section className="services">
			<h2 className="services__title title">Услуги</h2>
			<Gallery />
			<button type="button" className="services__cost-btn">
				Расчет стоимости
			</button>
		</section>
	)
}

export default Services
