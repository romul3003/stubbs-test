import React from 'react'
import Slider from 'react-slick'
import './Carousel.scss'
import { sliderData } from '../../mockData/mockData'

const Carousel = () => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	const rednderSlides = () =>
		sliderData.map(slide => (
			<div className="carousel__slide" key={slide.id}>
				<picture className="carousel__wrap">
					<source srcSet={`${slide.retina_2x_src} 2x`} type="image/png" />
					<source srcSet={`${slide.retina_3x_src} 3x`} type="image/png" />
					<img src={slide.src} alt={slide.alt} className="carousel__img" />
				</picture>
				<div className="carousel__text-layer">
					<div className="carousel__text">{slide.text}</div>
				</div>
			</div>
		))

	return (
		<div className="carousel">
			<Slider {...settings}>{rednderSlides()}</Slider>
		</div>
	)
}

export default Carousel
