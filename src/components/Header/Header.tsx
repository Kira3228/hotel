import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Header.scss'
type HeaderType = {
	color?: 'blue' | 'none'
	className?: string
	isTransparent?: boolean
}
export const Header: React.FC<HeaderType> = ({
	color,
	className,
	isTransparent,
}) => {
	const combinedClassName = `header ${color} ${className}`
	if (!isTransparent) {
		return null
	}
	return (
		<>
			<header className={combinedClassName}>
				<div className='header__logo'>
					<span className='header__logo name'>Hotel</span>
					<span className='header__logo name blue'>hub</span>
				</div>
				<nav>
					<Button color='none' className='name' size='medium'>
						About Us
					</Button>
					<Button color='none' className='name' size='medium'>
						Contact Us
					</Button>
					<Button color='none' size='medium'>
						Log In
					</Button>
					<Link to='registration'>
						<Button color='blue' size='medium'>
							Sing Up
						</Button>
					</Link>
				</nav>
			</header>
		</>
	)
}
