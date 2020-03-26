import React from 'react'
import './MenuToggle.scss'
import classNames from 'classnames'

const MenuToggle = ({ menuIsActive, setMenu }) => {
	const toggleButton = () => {
		setMenu(!menuIsActive)
	}

	return (
		<button
			type="button"
			className={classNames('menu-toggle-btn', { change: menuIsActive })}
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
