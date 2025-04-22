import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import './RegisterPage.scss'
import { AutoCompleteInput } from '../../components/AutocompliteInput/AutoCompliteImput'
import { UserRegistrationDto } from '../../types/UserRegistration.dto'

export const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState<UserRegistrationDto>({
		firstName: '',
		middleName: '',
		lastName: '',
		phone: '',
		email: '',
		password: '',
	})

	const handleInputChange = (fieldName: string, value: string) => {
		setFormData(prev => ({
			...prev,
			[fieldName]: value,
		}))
	}
	const test:UserRegistrationDto = {
		firstName: 'Кирилл',
		middleName: 'Александрович',
		lastName: 'Воронцов',
		email: 'hanzomein2@gmail.com',
		password: 'qwertyasdfgh',
		phone: '89229038716'
	}
	
	const handleSubmit = async (e: React.FormEvent) => {
		console.log(formData)
		e.preventDefault();
		try{
			const response = await fetch('http://localhost:3000/auth/registration', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(test),
			})
			if(!response.ok){
				throw new Error('Ошибка при регистрации');
			}
			const data = await response.json()
			console.log('Успешная регистрация', data)
		}
		catch(error) 
		{
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
			</form>
		</div>
	)
}
