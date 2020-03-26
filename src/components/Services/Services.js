import React from 'react'
import './Services.scss'
import Gallery from './Gallery/Gallery'

const Services = () => {
	return (
		<section className="services">
			<h2 className="services__title title">Услуги</h2>
			<div className="container">
				<Gallery />
				<div className="services__btn-wrap">
					<button type="button" className="services__cost-btn">
						Быстрый расчет цены по чертежу
					</button>
				</div>
			</div>
		</section>
	)
}

export default Services
