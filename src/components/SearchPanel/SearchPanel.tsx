import React, { useState } from 'react'
import { InputDate } from '../InputDate/InputDate'
import './SearchPanel.scss'
import { Button } from '../Button/Button'
import { AutoCompleteInput } from '../AutocompliteInput/AutoCompliteImput'

type SearchData = {
	place: string
	startDate: string
	endDate: string
}

export const SearchPanel: React.FC = () => {
	const [searchData, setSearchData] = useState<SearchData>({
		place: '',
		startDate: '',
		endDate: '',
	})

	const handleInputChange = (fieldName: keyof SearchData, value: string) => {
		setSearchData(prev => ({
			...prev,
			[fieldName]: value,
		}))
	}

	return (
		<div className='search-panel'>
			<div className='search-panel__data'>
				<AutoCompleteInput
					fieldName='place'
					value={searchData.place}
					onChange={handleInputChange}
					label='Место'
				/>
				<InputDate
					value={searchData.startDate}
					onChange={value => handleInputChange('startDate', value)}
				/>
				<InputDate
					value={searchData.endDate}
					onChange={value => handleInputChange('endDate', value)}
				/>
			</div>
			<div className='search-panel__button'>
				<Button className='button' color='blue' size='extra-large'>
					Search
				</Button>
			</div>
		</div>
	)
}
