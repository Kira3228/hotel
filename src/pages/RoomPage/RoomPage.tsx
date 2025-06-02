import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { RoomResponseDto } from '../../types/dto/RoomResponse.dto'

import './RoomPage.scss'
import { ImageSlider } from '../../shared/ImageSlider/ImageSlider'
import { AvalibleRooms } from '../../shared/AvalibleRooms/AvalibleRooms'
import { testRooms } from '../../DevData/Rooms'
import { Button } from '@mui/joy'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { setIsBooked } from '../../store/bookedSlice'

const RoomPage = () => {
	const { id } = useParams<{ id: string }>()
	const dispatch = useDispatch<AppDispatch>()
	const [roomData, setRoomData] = useState<RoomResponseDto>()
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(false)
	const isBooked = useSelector(
		(state: RootState) => state.isBooked[Number(id)] || false
	)
	const room = testRooms.find(r => r.id === Number(id))

	const navigate = useNavigate()
	useEffect(() => {
		const fetchRoom = async () => {
			try {
				// Не сбрасываем состояние бронирования здесь!
				const response = await fetch(`http://localhost:3000/rooms/room/${id}`)
				if (!response.ok) throw new Error('Ошибка запроса')
				const data: RoomResponseDto = await response.json()
				setRoomData(data)
			} catch (error) {
				console.error('Ошибка загрузки:', error)
				setError(true)
			} finally {
				setIsLoading(false)
			}
		}

		fetchRoom()
	}, [id])

	if (isLoading) {
		return <p>Загрузка...</p>
	}

	if (error || !roomData) {
		return <p>Ошибка загрузки данных</p>
	}
	const bookingClick = () => {}

	return (
		<>
			<div className='room'>
				<div className='room__info'>
					<h1 className='room__info--header'>
						{roomData.name || 'Без названия'}
					</h1>
					<p className='room__indo--area'>Площадь</p>
					<span className='room__indo--capacity'>количесво </span>
					<div className='no-flex'>
						<p className='room__info--rating'>Рейтинг</p>
					</div>
				</div>
				<div className='room__booking'>
					<p className='room__booking--price'>
						Цена: {roomData.price || 'Не указана'}
					</p>
					{/* <Button
						onClick={() => navigate(`/booking/${roomData.id}`)}
						type='button'
						color='blue'
						size='exstra-small'
					>
						Забронировать
					</Button> */}
					<Button
						disabled={isBooked}
						onClick={() => navigate(`/booking/${roomData.id}`)}
						size='lg'
					>
						Забронировать
					</Button>
				</div>
			</div>
			<div className='image-slider'>
				<ImageSlider image={roomData.Image} />
			</div>
			<div>
				<p>{roomData.description}</p>
			</div>
			<div>
				<AvalibleRooms />
			</div>
		</>
	)
}

export default RoomPage
