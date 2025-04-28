import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import './RegisterPage.scss'
import { AutoCompleteInput } from '../../components/AutocompliteInput/AutoCompliteImput'
import { UserRegistrationDto } from '../../types/dto/UserRegistration.dto'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState<UserRegistrationDto>({
		firstName: '',
		middleName: '',
		lastName: '',
		phone: '',
		email: '',
		password: '',
	})
	const navigate = useNavigate()
	const handleInputChange = (fieldName: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[fieldName]: value,
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		console.log('Отправка данных', formData)
		e.preventDefault()
		try {
			const response = await fetch('http://localhost:3000/auth/registration', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
			if (!response.ok) {
				throw new Error('Ошибка при регистрации')
			}
			const data = await response.json()
			console.log('Успешная регистрация', data)

			if (data.access_token) {
				localStorage.setItem('access_token', data.access_token)
				console.log('Токен сохранён в localStorage')
				navigate('/')
			} else {
				console.log('В ответе нет access_token')
			}

		} catch (error) {
			console.log('Ошибка:', error)
		}
	}

	return (
		<div className='register'>
			<form onSubmit={handleSubmit} className='register-form'>
				<div className='sec'>
					<span>Регистрация</span>
					<AutoCompleteInput
						fieldName='firstName'
						onChange={handleInputChange}
						value={formData.firstName}
						label='Имя'
					/>
					<AutoCompleteInput
						fieldName='lastName'
						onChange={handleInputChange}
						value={formData.lastName}
						label='Фамилия'
					/>
					<AutoCompleteInput
						fieldName='middleName'
						onChange={handleInputChange}
						value={formData.middleName}
						label='Отчество*'
					/>
					<AutoCompleteInput
						fieldName='phone'
						onChange={handleInputChange}
						value={formData.phone}
						label='Телефон'
					/>
					<AutoCompleteInput
						fieldName='email'
						onChange={handleInputChange}
						value={formData.email}
						label='Почта'
					/>
					<AutoCompleteInput
						fieldName='password'
						onChange={handleInputChange}
						value={formData.password}
						label='Пароль'
					/>
					<Button type='submit' color='blue' size='large'>
						Зарегистрироваться
					</Button>
				</div>
				<Link to='/login'>
					<span>Уже есть аккаунт? Войдите!</span>
				</Link>
			</form>
		</div>
	)
}
