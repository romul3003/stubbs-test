import React from 'react'
import './Navigation.scss'
import Localization from '../../common/Localization/Localization'
import { NavLink } from 'react-router-dom'
import { useMediaSize } from '../../../hooks/useMediaSize'
import classNames from 'classnames'

const Navigation = ({ menuIsActive }) => {
	const isMobile = useMediaSize()

	return (
		<nav className={classNames('nav', { active: menuIsActive })}>
			<ul className="nav__menu">
				<li className="nav__menu-item">
					<NavLink to="/" className="nav__menu-link" exact>
						Главная
					</NavLink>
					{isMobile && <Localization />}
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
