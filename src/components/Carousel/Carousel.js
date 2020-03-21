import React from 'react'
import Slider from 'react-slick'
import './Carousel.scss'

import img1 from '../../assets/img/slider/slide1-desktop.png'
import img1_2x from '../../assets/img/slider/slide1-desktop@2x.png'
import img1_3x from '../../assets/img/slider/slide1-desktop@3x.png'

const Carousel = () => {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div className="carousel">
			<Slider {...settings}>
				<div className="carousel__item">
					<picture className="carousel__wrap">
						<source srcSet={`${img1_2x} 2x`} />
						<source srcSet={`${img1_3x} 3x`} />
						<img src={img1} alt="slide" className="carousel__img" />
					</picture>
				</div>
				<div className="carousel__item">
					<picture className="carousel__wrap">
						<source srcSet={`${img1_2x} 2x`} />
						<source srcSet={`${img1_3x} 3x`} />
						<img src={img1} alt="slide" className="carousel__img" />
					</picture>
				</div>
				<div className="carousel__item">
					<picture className="carousel__wrap">
						<source srcSet={`${img1_2x} 2x`} />
						<source srcSet={`${img1_3x} 3x`} />
						<img src={img1} alt="slide" className="carousel__img" />
					</picture>
				</div>
				<div className="carousel__item">
					<picture className="carousel__wrap">
						<source srcSet={`${img1_2x} 2x`} />
						<source srcSet={`${img1_3x} 3x`} />
						<img src={img1} alt="slide" className="carousel__img" />
					</picture>
				</div>
			</Slider>
		</div>
	)
}

export default Carousel
