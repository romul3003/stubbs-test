import React, { useState } from 'react'
import './Localization.scss'
import { languagesList } from '../../../mockData/mockData'

const Localization = () => {
	const [isVisible, setVisible] = useState(false)
	const [languages, setLanguages] = useState(languagesList)

	const changeLanguage = id => {
		const newLanguages = []

		for (let i = 0; i < languages.length; i++) {
			if (languages[i].id === id && i === 0) {
				setVisible(!isVisible)
				return
			} else if (languages[i].id === id) {
				languages[i].active = true
				newLanguages.unshift(languages[i])
			} else {
				languages[i].active = false
				newLanguages.push(languages[i])
			}
		}

		setLanguages(newLanguages)
		setVisible(false)
	}

	const renderLanguages = () =>
		languages.map(lang => (
			<div
				className={`localization__item ${lang.active ? 'active' : ''}`.trim()}
				key={lang.id}
			>
				<button
					type="button"
					className="localization__btn"
					onClick={() => changeLanguage(lang.id)}
				>
					<img src={lang.src} alt={lang.label} className="localization__img" />
				</button>
			</div>
		))

	return (
		<div className={`localization ${!isVisible ? '' : 'visible'}`.trim()}>
			{renderLanguages()}
		</div>
	)
}

export default Localization
