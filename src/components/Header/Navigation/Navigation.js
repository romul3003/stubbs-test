import React from 'react'
import './Navigation.scss'

const Navigation = () => {
	return (
		<nav className="nav">
			<ul className="nav__menu">
				<li className="nav__menu-item">
					<a href="/" className="nav__menu-link">
						Главная
					</a>
				</li>
				<li className="nav__menu-item">
					<a href="/services" className="nav__menu-link">
						Услуги
					</a>
				</li>
				<li className="nav__menu-item">
					<a href="/our-works" className="nav__menu-link">
						Наши работы
					</a>
				</li>
				<li className="nav__menu-item">
					<a href="about-us" className="nav__menu-link">
						О нас
					</a>
				</li>
				<li className="nav__menu-item">
					<a href="/contacts" className="nav__menu-link">
						Контакты
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
