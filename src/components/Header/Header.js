import React, { useState } from 'react'
import './Header.scss'
import MenuToggle from './MenuToggle/MenuToggle'
import Search from './Search/Search'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'

const Header = () => {
	const [menuIsActive, setMenu] = useState(false)

	return (
		<header className="header">
			<div className="header__layer" />
			<Logo />
			<Navigation menuIsActive={menuIsActive} />
			<Search />
			<MenuToggle menuIsActive={menuIsActive} setMenu={setMenu} />
		</header>
	)
}

export default Header
