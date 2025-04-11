import { AutoCompliteInput } from '../../components/AutocompliteInput/AutoCompliteImput'
import { Button } from '../../components/Button/Button'
import './RegisterPage.scss'


export const RegisterPage: React.FC = () => {
	return (<>
		<div className="register-form">
			<div className='sec'>
				<span>Регистрация</span>
				<AutoCompliteInput label='Имя'/>
				<AutoCompliteInput label='Фамилия'/>
				<AutoCompliteInput label='Отчество*'/>
				<AutoCompliteInput label='Телефон'/>
				<AutoCompliteInput label='Почта'/>
				<AutoCompliteInput label='Пароль'/>
				<Button color='blue' size='large'>Зарегистрироваться</Button>
			</div>
		</div>
	
	
	</>)
}
