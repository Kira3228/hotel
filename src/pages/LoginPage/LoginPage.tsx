import { useState } from 'react'
import { AutoCompleteInput } from '../../components/AutocompliteInput/AutoCompliteImput'
import { loginDto } from '../../types/dto/Login,dto'
import { Button } from '../../components/Button/Button'
import './LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext'

export const LoginPage: React.FC = () => {
	const navigate = useNavigate()
	const [value, setValue] = useState<loginDto>({
		email: '',
		password: '',
	})
	const [isVisible, setIsVisible] = useState(false)
	const {login} = useAuth()
	const handleInputChange = (fieldName: string, value: string) => {
		setValue(prev => ({
			...prev,
			[fieldName]: value,
		}))
	}
	const handleSubmit = async (e: React.FormEvent) => {
		console.log('Отправка данных')
		e.preventDefault()
		try {
			const response = await fetch('http://localhost:3000/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(value),
			})
			if (!response.ok) {
				throw new Error('Ошибка при регистрации')
			}
			const data = await response.json()
			console.log('Успешная регистрация', data)

			if (data.access_token) {
				localStorage.setItem('access_token', data.access_token)
				console.log('Токен сохранён в localStorage')
				login()
				navigate('/')
			} else {
				console.log('В ответе нет access_token')
			}
			setValue({
				email: '',
				password: '',
			})
            setIsVisible(false)
		} catch (error) {
            setIsVisible(true)
			console.log('Ошибка:', error)
		}
	}
    const handleErrorMessage = () =>{
        setIsVisible(false)
    }
	return (
		<>
			<div className='login'>
				<form className='login-form' onSubmit={handleSubmit}>
					<AutoCompleteInput
						value={value.email}
						onChange={handleInputChange}
						label='Логин'
						fieldName='email'
					/>
					<AutoCompleteInput
						value={value.password}
						onChange={handleInputChange}
						label='Пароль'
						fieldName='password'
					/>
					<span
						className={`error ${isVisible ? 'visible' : 'invisible'}`}
						onClick={handleErrorMessage}
					>
						Неверный электронный адрес или пароль
					</span>
					<Button type='submit' color='blue' className='' size='large'>
						Войти
					</Button>
				</form>
			</div>
		</>
	)
}
