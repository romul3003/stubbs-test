import React from 'react'
import './Gallery.scss'
import { gallery } from '../../mockData/mockData'

const Gallery = () => {
	return (
		<ul className="gallery">
			{gallery.map(item => (
				<li className="gallery__item" key={item.id}>
					<div className="gallery__item-wrap">
						<picture className="gallery__img-wrap">
							<source
								srcSet={`${item.src_360} 1x`}
								type="image/png"
								media="(max-width:520px)"
							/>
							<source srcSet={`${item.retina_2x_src} 2x`} type="image/png" />
							<source
								srcSet={`${item.retina_2x_src_360} 2x`}
								type="image/png"
								media="(max-width:520px)"
							/>
							<source srcSet={`${item.retina_3x_src} 3x`} type="image/png" />
							<source
								srcSet={`${item.retina_3x_src_360} 3x`}
								type="image/png"
								media="(max-width:520px)"
							/>

							<img src={item.src} alt={item.title} className="gallery__img" />
						</picture>
						<div className="gallery__item-title">{item.title}</div>
					</div>
				</li>
			))}
		</ul>
	)
}

export default Gallery
