import React from 'react'
import './MenuToggle.scss'

const MenuToggle = ({ menuIsActive, setMenu }) => {
	const toggleButton = () => {
		setMenu(!menuIsActive)
	}

	return (
		<button
			type="button"
			className={`menu-toggle-btn ${menuIsActive ? 'change' : ''} `.trim()}
			onClick={toggleButton}
		>
			<span className="menu-toggle__wrap">
				<span className="menu-toggle-btn__bar menu-toggle-btn__bar--top" />
				<span className="menu-toggle-btn__bar menu-toggle-btn__bar--middle" />
				<span className="menu-toggle-btn__bar menu-toggle-btn__bar--bottom" />
			</span>
		</button>
	)
}

export default MenuToggle
