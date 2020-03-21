import React from 'react'
import './Logo.scss'
import logo2x from '../../../assets/img/logo/logo@2x.png'
import logo3x from '../../../assets/img/logo/logo@3x.png'
import logo from '../../../assets/img/logo/logo.png'

const Logo = () => {
	return (
		<picture className="logo">
			<source srcSet={`${logo2x} 2x`} />
			<source srcSet={`${logo3x} 3x`} />
			<img src={logo} alt="logo" />
		</picture>
	)
}

export default Logo
