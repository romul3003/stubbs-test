import React, { useEffect, useState } from 'react'
import './Header.scss'
import MenuToggle from './MenuToggle/MenuToggle'
import Search from './Search/Search'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import { useMediaSize } from '../../hooks/useMediaSize'

const Header = () => {
	const [menuIsActive, setMenu] = useState(false)
	const isMobile = useMediaSize()

	useEffect(() => {
		if (!isMobile) setMenu(false)
	}, [menuIsActive, isMobile])

	return (
		<header className="header">
			<div className="header__container container">
				<div className="header__layer" />
				<Logo />
				<Navigation menuIsActive={menuIsActive} />
				<Search />
				{isMobile && <MenuToggle menuIsActive={menuIsActive} setMenu={setMenu} />}
			</div>
		</header>
	)
}

export default Header
