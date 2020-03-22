import React from 'react'
import './Localization.scss'
import { languagesList } from '../../../mockData/mockData'

const Localization = () => {
	const languages = () =>
		languagesList.map(lang => (
			<li
				className={`localization__item ${lang.active ? 'active' : ''}`.trim()}
				key={lang.id}
			>
				<button type="button" className="localization__btn">
					<img src={lang.src} alt={lang.label} className="localization__img" />
				</button>
			</li>
		))

	return <ul className="localization">{languages()}</ul>
}

export default Localization
