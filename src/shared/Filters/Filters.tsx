import { useState } from 'react'
import RangeSlider from '../../components/DoubleSlider/DoubleSlider'
import { FilterLayout } from '../../components/FilterLayout/FilterLayout'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import './Filters.scss'
import { Button } from '../../components/Button/Button'
type FilterProps = {
	children?: React.ReactNode
	className?: string
}

export const Filters: React.FC<FilterProps> = ({}) => {
	const [rating, setRating] = useState<string>('')
	const [isAvailable, setIsAvailable] = useState<boolean>(false)
	const [capacity, setCapacity] = useState<string>('')
	const handleFilterClick = () => {}
	return (
		<>
			<div className='filters'>
				<span className='filters__label'>Фильтры</span>
				<FilterLayout category='Цена'>
					<RangeSlider />
				</FilterLayout>
				<FilterLayout category='Оценки'>
					<div className='radio'>
						<RadioButton
							inputId='rating1'
							name='rating'
							value={1}
							onChange={(e: RadioButtonChangeEvent) => setRating(e.value)}
							checked={rating === '1'}
						/>
						<label htmlFor='rating1'>1</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='rating2'
							name='rating'
							value={2}
							onChange={(e: RadioButtonChangeEvent) => setRating(e.value)}
							checked={rating === '2'}
						/>
						<label htmlFor='rating2'>2</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='rating3'
							name='rating'
							value={3}
							onChange={(e: RadioButtonChangeEvent) => setRating(e.value)}
							checked={rating === '3'}
						/>
						<label htmlFor='rating3'>3</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='rating4'
							name='rating'
							value={4}
							onChange={(e: RadioButtonChangeEvent) => setRating(e.value)}
							checked={rating === '4'}
						/>
						<label htmlFor='rating4'>4</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='rating5'
							name='rating'
							value={5}
							onChange={(e: RadioButtonChangeEvent) => setRating(e.value)}
							checked={rating === '5'}
						/>
						<label htmlFor='rating5'>5</label>
					</div>
				</FilterLayout>
				<FilterLayout category='Вместимость'>
					<div className='radio'>
						<RadioButton
							inputId='capacity1'
							name='capacity'
							value={1}
							onChange={(e: RadioButtonChangeEvent) => setCapacity(e.value)}
							checked={rating === '5'}
						/>
						<label htmlFor='capacity1'>1 человек</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='capacity2'
							name='capacity'
							value={2}
							onChange={(e: RadioButtonChangeEvent) => setCapacity(e.value)}
							checked={rating === '2'}
						/>
						<label htmlFor='capacity1'>2 человека</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='capacity3'
							name='capacity'
							value={3}
							onChange={(e: RadioButtonChangeEvent) => setCapacity(e.value)}
							checked={rating === '3'}
						/>
						<label htmlFor='capacity3'>3 человека</label>
					</div>
					<div className='radio'>
						<RadioButton
							inputId='capacity4'
							name='capacity'
							value={4}
							onChange={(e: RadioButtonChangeEvent) => setCapacity(e.value)}
							checked={rating === '4'}
						/>
						<label htmlFor='capacity4'>4 человека</label>
					</div>
				</FilterLayout>
				<FilterLayout category='Свободны'>
					<div className='radio'>
						<RadioButton
							inputId='AvailableYes'
							name='Только свободные'
							value={true}
							onChange={(e: RadioButtonChangeEvent) => setIsAvailable(true)}
							checked={isAvailable === true}
						/>
						<label htmlFor='AvailableYes'>Только свободные</label>
						<RadioButton
							inputId='ShowAll'
							name='Показать все'
							value={false}
							onChange={(e: RadioButtonChangeEvent) => setIsAvailable(false)}
							checked={isAvailable === false}
						/>
						<label htmlFor='ShowAll'>Все</label>
					</div>
				</FilterLayout>
				<Button type='button' color='blue' onClick={handleFilterClick}>
					Найти
				</Button>
			</div>
		</>
	)
}
