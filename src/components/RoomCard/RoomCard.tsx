import { Button } from '../Button/Button'

export const RoomCard: React.FC = () => {
	return (
		<>
			<img src='' alt='' />
			<span className='name'></span>
			<p className='description'></p>
			<span className='rating'></span>
			<span className='price'></span>
			<Button color='blue' type='button'>
				Посмотреть
			</Button>
		</>
	)
}
