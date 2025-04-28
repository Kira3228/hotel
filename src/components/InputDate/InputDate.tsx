import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './InputDate.scss'
import calendar from './../../public/calendar.svg'
import React from 'react'

type InputDateProps = {
	value: string
	onChange: (value: string) => void
	label: string
}

export const InputDate: React.FC<InputDateProps> = ({ value, onChange, label }) => {
	const parsedDate = value ? new Date(value) : null
	const [isFocus, setIsFocus] = React.useState(false)

	return (
		<div
			className={`datepicker-container ${
				isFocus || value ? 'active-date' : ''
			}`}
		>
			<label className='label'>{label}</label>
			<DatePicker
				className='input-date'
				selected={parsedDate}
				onChange={date => {
					if (date) {
						onChange(date.toISOString())
					}
				}}
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				dateFormat='yyyy-MM-dd'
			/>
			<img className='image' src={calendar} alt='calendar' />
		</div>
	)
}
