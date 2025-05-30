import { Link, useNavigate } from 'react-router-dom'

import './Header.scss'
import { useAuth } from '../../Context/AuthContext'
import { Button } from '../../components/Button/Button'
type HeaderType = {
	color?: 'blue' | 'none'
	className?: string
	isTransparent?: boolean
}

export const Header: React.FC<HeaderType> = ({ className, isTransparent }) => {
	const navigate = useNavigate()
	const { isAuth, logout } = useAuth()
	const combinedClassName = `header ${isTransparent ? 'none' : 'blue'
		} ${className}`

	const handleLogout = () => {
		logout() // обновляет isAuth в context
		navigate('/') // перенаправляет на главную
	}

	return (
		<>
			<header className={combinedClassName}>
				<Link to='/'>
					<div className='header__logo'>
						<span className='header__logo name'>Hotel</span>
						<span className='header__logo name blue'>hub</span>
					</div>
				</Link>

				<nav>
					<Button type='button' color={'none'} className='name' size='medium'>
						About Us
					</Button>
					<Link to={'/account'}>
						<Button type='button' color={'none'} className='name' size='medium'>
							Contact Us
						</Button>
					</Link>

					{isAuth ? (
						<Link to={'/account'}>
							<Button type='button' color='blue' size='medium'>
								Личный кабинет
							</Button>
						</Link>
					) : (
						<Link to='login'>
							<Button type='button' color='none' size='medium'>
								Log In
							</Button>
						</Link>
					)}

					{isAuth ? (
						<Button
							onClick={handleLogout}
							type='button'
							color='blue'
							size='medium'
						>
							Выйти
						</Button>
					) : (
						<Link to='registration'>
							<Button type='button' color={isTransparent ? 'blue' : 'white'} size='medium'>
								Sing Up
							</Button>
						</Link>
					)}
				</nav>
			</header>
		</>
	)
}
