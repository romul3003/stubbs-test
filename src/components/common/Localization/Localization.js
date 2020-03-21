import React from 'react'
import './Localization.scss'
import ru from '../../../assets/img/icons/flag-ru.svg'
import ukr from '../../../assets/img/icons/flag-ukr.svg'
import en from '../../../assets/img/icons/flag-en.png'

const languagesList = [
	{ id: 'ru', src: ru, label: 'russian icon', active: true },
	{ id: 'ukr', src: ukr, label: 'ukrainian icon', active: false },
	{ id: 'en', src: en, label: 'english icon', active: false },
]

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
