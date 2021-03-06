import React, { useState } from 'react'
import './Search.scss'
import searchIcon from '../../../assets/img/icons/search.svg'
import classNames from 'classnames'

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
			className={classNames('search', { visible: fieldVisibility })}
			onSubmit={submitHandler}
		>
			<div className="search__form-control">
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
			</div>
		</form>
	)
}

export default Search
