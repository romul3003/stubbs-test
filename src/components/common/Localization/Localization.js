import React, { useState } from 'react'
import './Localization.scss'
import { languagesList } from '../../../mockData/mockData'
import { useMediaSize } from '../../../hooks/useMediaSize'

const Localization = () => {
	const [isVisible, setVisible] = useState(false)
	const isMobile = useMediaSize()

	const showLanguages = () => {
		setVisible(!isVisible)
	}

	const languages = () =>
		languagesList.map(lang => (
			<div
				className={`localization__item ${lang.active ? 'active' : ''}`.trim()}
				key={lang.id}
			>
				<button type="button" className="localization__btn" onClick={() => {}}>
					<img src={lang.src} alt={lang.label} className="localization__img" />
				</button>
			</div>
		))

	return (
		<div className={`localization ${!isVisible ? '' : 'visible'}`.trim()}>
			{languages()}
			{!isMobile && <button className="localization__more-btn" onClick={showLanguages} />}
		</div>
	)
}

export default Localization
