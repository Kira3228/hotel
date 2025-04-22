import { useState } from 'react'
import './AutoCompliteImput.scss'
import svg from './../../public/booking-svg.svg'

type AutoCompleteInputProps = {
	value: string
	label: string
	fieldName: string // Добавляем имя поля
	onChange: (fieldName: string, value: string) => void
}

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
	label,
	value,
	fieldName,
	onChange,
}) => {
	const [isFocused, setIsFocused] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(fieldName, e.target.value) // Передаем и имя поля, и значение
	}

	return (
		<div className={`input-container ${isFocused || value ? 'active' : ''}`}>
			<label className='floating-label'>{label}</label>
			<img className='image' src={svg} alt='svg' />
			<input
				className='input'
				value={value}
				onChange={handleChange}
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
				type={fieldName === 'password' ? 'password' : 'text'} // Особый случай для пароля
			/>
		</div>
	)
}
