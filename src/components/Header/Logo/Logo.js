import React from 'react'
import './Logo.scss'
import logo2x from '../../../assets/img/logo/logo@2x.png'
import logo3x from '../../../assets/img/logo/logo@3x.png'
import logo from '../../../assets/img/logo/logo.png'

const Logo = () => {
	return (
		<picture className="logo">
			<source srcSet={`${logo2x} 2x`} type="image/png" />
			<source srcSet={`${logo3x} 3x`} type="image/png" />
			<img src={logo} alt="logo" />
		</picture>
	)
}

export default Logo
