import DatePicker from 'react-datepicker'
import './InputDate.scss'
import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import calendar from './../../public/calendar.svg'

export const InputDate: React.FC = () => {
	const [startDate, setStartDate] = useState<Date | null>(null)
	const [isFocus, setIsFocus] = useState(false)

	return (
		<div
			className={`datepicker-container ${
				isFocus || startDate ? 'active-date' : ''
			}`}
		>
			<label className='label'>Введите </label>
			<DatePicker
				className='input-date'
				selected={startDate}
				onChange={date => setStartDate(date)}
				onFocus={() => {
					setIsFocus(true)
				}}
				onBlur={() => {
					setIsFocus(false)
				}}
			/>
			<img className='image' src={calendar} alt='calendar' />
		</div>
	)
}
