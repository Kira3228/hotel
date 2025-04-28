import React, { useState } from 'react'
import { InputDate } from '../InputDate/InputDate'
import './SearchPanel.scss'
import { Button } from '../Button/Button'
import { AutoCompleteInput } from '../AutocompliteInput/AutoCompliteImput'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { setSearchData } from '../../store/searchSlice'

type SearchPanelProps = {
	initialData?: {
		place: string
		startDate: string
		endDate: string
	}
	onSearchClick?: () => void
}
type SearchData = {
	place: string
	startDate: string
	endDate: string
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ initialData }) => {
	const [searchData, setSearchDataState] = useState<SearchData>({
		place: initialData?.place || '',
		startDate: initialData?.startDate || new Date().toLocaleDateString('sv-SE'),
		endDate:
			initialData?.endDate ||
			new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString('sv-SE'),
	})
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const handleSearchClick = () => {
		dispatch(setSearchData(searchData))
		navigate('room-list')
	}
	const handleInputChange = (fieldName: keyof SearchData, value: string) => {
		setSearchDataState(prev => ({
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
					onChange={(fieldName: string, value: string) =>
						handleInputChange(fieldName as keyof SearchData, value)
					}
					label='Место'
				/>
				<InputDate
					value={searchData.startDate}
					onChange={value => handleInputChange('startDate', value)}
					label='Заезд'
				/>
				<InputDate
					value={searchData.endDate}
					onChange={value => handleInputChange('endDate', value)}
					label='Выезд'
				/>
			</div>
			<div className='search-panel__button'>
				<Button
					type='button'
					className='button'
					color='blue'
					size='extra-large'
					onClick={handleSearchClick}
				>
					Search
				</Button>
			</div>
		</div>
	)
}
