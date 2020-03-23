import React, { useState } from 'react'
import './Search.scss'
import searchIcon from '../../../assets/img/icons/search.svg'

const Search = () => {
	const [value, setValue] = useState('')
	const [fieldVisibility, setVisibility] = useState(false)

	const onFieldChange = event => {
		setValue(event.target.value)
	}

	const submitHandler = event => {
		event.preventDefault()

		if (value.trim()) {
			setValue('')
		}
	}

	const showField = () => {
		setVisibility(!fieldVisibility)
	}

	return (
		<form
			className={`search ${fieldVisibility ? 'visible' : ''}`.trim()}
			onSubmit={submitHandler}
		>
			<input
				type="text"
				className="search__field"
				placeholder="Поиск"
				value={value}
				onChange={onFieldChange}
			/>
			<button type="button" className="search__toggle-btn" onClick={showField}>
				<img src={searchIcon} alt="search icon" />
			</button>
		</form>
	)
}

export default Search
