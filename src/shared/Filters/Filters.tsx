import {
	setRating,
	setCapacity,
	setIsAvailable,
	resetFilters,
} from '../../store/filterSlice'
import RangeSlider from '../../components/DoubleSlider/DoubleSlider'
import { FilterLayout } from '../../components/FilterLayout/FilterLayout'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import { Button } from '../../components/Button/Button'
import './Filters.scss'
import { useAppDispatch, useAppSelector } from '../../Hooks/reduxHooks'

export const Filters = () => {
	const dispatch = useAppDispatch()
	const { rating, capacity, isAvailable } = useAppSelector(
		state => state.filter
	)

	const handleFilterClick = () => {
		console.log('Фильтры применены:', { rating, capacity, isAvailable })
	}

	return (
		<div className='filters'>
			<span className='filters__label'>Фильтры</span>
			<FilterLayout category='Цена'>
				<RangeSlider />
			</FilterLayout>
			<FilterLayout category='Оценки'>
				{[0, 1, 2, 3, 4, 5].map(val => (
					<div className='radio' key={val}>
						<RadioButton
							inputId={`rating${val}`}
							name='rating'
							value={val.toString()}
							onChange={(e: RadioButtonChangeEvent) =>
								dispatch(setRating(e.value))
							}
							checked={rating === val.toString()}
						/>
						<label htmlFor={`rating${val}`}>{val>0 ? val: `Без оценки` }</label>
					</div>
				))}
			</FilterLayout>
			<FilterLayout category='Вместимость'>
				{[1, 2, 3, 4].map(val => (
					<div className='radio' key={val}>
						<RadioButton
							inputId={`capacity${val}`}
							name='capacity'
							value={val.toString()}
							onChange={(e: RadioButtonChangeEvent) =>
								dispatch(setCapacity(e.value))
							}
							checked={capacity === val.toString()}
						/>
						<label htmlFor={`capacity${val}`}>{val} человек</label>
					</div>
				))}
			</FilterLayout>
			<FilterLayout category='Свободны'>
				<div className='radio'>
					<RadioButton
						inputId='AvailableYes'
						name='availability'
						value={true}
						onChange={() => dispatch(setIsAvailable(true))}
						checked={isAvailable === true}
					/>
					<label htmlFor='AvailableYes'>Только свободные</label>
					<RadioButton
						inputId='ShowAll'
						name='availability'
						value={false}
						onChange={() => dispatch(setIsAvailable(false))}
						checked={isAvailable === false}
					/>
					<label htmlFor='ShowAll'>Все</label>
				</div>
			</FilterLayout>
			<Button type='button' color='blue' onClick={handleFilterClick}>
				Найти
			</Button>
		</div>
	)
}
