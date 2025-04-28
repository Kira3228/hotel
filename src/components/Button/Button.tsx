import React from 'react'
import './Button.scss'
import { ButtonType } from './ButtonProps'
export const Button: React.FC<ButtonType> = ({
	className,
	children,
	color,
	size,
	type,
	onClick
}) => {
	const combinedClassName = `btn ${size} ${color} ${className}`.trim()
	if (type === 'button') {
		return (
			<>
				<button onClick={onClick} className={combinedClassName}>{children}</button>
			</>
		)
	}
	return (
		<>
			<input type={type} className={combinedClassName}/>
		</>
	)
}
