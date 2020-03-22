import React from 'react'
import './Logo.scss'
import logo from '../../../assets/img/logo/logo.png'
import logo1360 from '../../../assets/img/logo/logo1360.png'

const Logo = () => {
	return (
		<picture className="logo">
			<source srcSet={`${logo1360} 1x`} type="image/png" media="(min-width:1200px)" />
			<img src={logo} alt="logo" />
		</picture>
	)
}

export default Logo
