import { useState } from 'react'
import './AutoCompliteImput.scss'
import svg from './../../public/booking-svg.svg'
type AutoCompliteInputProps ={
	label: string
}
export const AutoCompliteInput: React.FC<AutoCompliteInputProps> = ({label}) => {
	const [inputValue, setInputValue] = useState('')

	const [isFocused, setIsFocused] = useState(false)
	const onFocusHandler = () => {
		console.log(isFocused)
		setIsFocused(true)
	}
	const onBlurHandler = () => {
		console.log(isFocused)
		setIsFocused(false)
	}
	return (
		<>
			<div
				className={`input-container ${isFocused || inputValue ? 'active' : ''}`}
			>
				<label className='floating-label'>{label} </label>
				<img className='image' src={svg} alt='svg' />
				<input
					className='input'
					value={inputValue}
					onChange={e => {
						setInputValue(e.target.value)
					}}
					onBlur={onBlurHandler}
					onFocus={onFocusHandler}
					type='text'
				/>
			</div>
		</>
	)
}
