import React from 'react'
import './Navigation.scss'
import Localization from '../../common/Localization/Localization'
import { NavLink } from 'react-router-dom'

const Navigation = ({ menuIsActive }) => {
	return (
		<nav className={`nav ${menuIsActive ? 'active' : ''}`.trim()}>
			<ul className="nav__menu">
				<li className="nav__menu-item">
					<NavLink to="/" className="nav__menu-link" exact>
						Главная
					</NavLink>
					<Localization />
				</li>
				<li className="nav__menu-item nav__menu-item--has-children">
					<NavLink to="/services" className="nav__menu-link">
						Услуги
					</NavLink>
				</li>
				<li className="nav__menu-item">
					<NavLink to="/our-works" className="nav__menu-link">
						Наши работы
					</NavLink>
				</li>
				<li className="nav__menu-item">
					<NavLink to="about-us" className="nav__menu-link">
						О нас
					</NavLink>
				</li>
				<li className="nav__menu-item">
					<NavLink to="/contacts" className="nav__menu-link">
						Контакты
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
