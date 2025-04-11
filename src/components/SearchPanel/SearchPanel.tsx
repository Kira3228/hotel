import React from 'react'
import { AutoCompliteInput } from '../AutocompliteInput/AutoCompliteImput'
import { InputDate } from '../InputDate/InputDate'
import './SearchPanel.scss'
import { Button } from '../Button/Button'

export const SearchPanel: React.FC = () => {
	return (
		<>
			<div className='search-panel'>
				<div className='search-panel__data'>
					<AutoCompliteInput label='Место' />
					<InputDate />
					<InputDate />
				</div>
				<div className='search-panel__button'>
					<Button className='button' color='blue' size='extra-large'>
						Search
					</Button>
				</div>
			</div>
		</>
	)
}
