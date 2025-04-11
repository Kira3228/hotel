import React from 'react'
import './Button.scss'
import { ButtonType } from './ButtonProps'
export const Button: React.FC<ButtonType> = ({
	className,
	children,
	color,
	size
}) => {
	const combinedClassName = `btn ${size} ${color} ${className}`.trim()
	return (
		<>
			<button className={combinedClassName}>{children}</button>
		</>
	)
}
