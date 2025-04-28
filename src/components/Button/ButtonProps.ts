export type ButtonType = {
	size?: 'extra-large' | 'large' | 'medium' | 'small' | 'exstra-small'
	color?: 'none' | 'white' | 'blue'
	children: React.ReactNode
	className?: string
	type: 'submit' | 'button'
	onClick?: () => void
}