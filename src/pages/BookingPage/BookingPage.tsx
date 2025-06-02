import { Button, Card, Input, Typography } from '@mui/joy'
import styles from './BookingPage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { useAuth } from '../../Context/AuthContext'
import { FormDate } from './formDate'
import { useFetch } from '../../Hooks/useFetch'
import { useNavigate, useParams } from 'react-router-dom'
import { RoomResponseDto } from '../../types/dto/RoomResponse.dto'
import { useEffect, useState } from 'react'
import { setIsBooked } from '../../store/bookedSlice'

export const BookingPage: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { isAuth } = useAuth()
	const { id } = useParams<{ id: string }>()
	const { startDate, endDate } = useSelector((state: RootState) => {
		return state.search
	})
	const isBooked = useSelector(
		(state: RootState) => state.isBooked[Number(id)] || false
	)
	const roomData = useFetch<RoomResponseDto>(
		id ? `http://localhost:3000/rooms/room/${id}` : ''
	)
	const [cardData, setCardData] = useState({
		cardNumber: '',
		cardMonth: '',
		cardYear: '',
		cvv: '',
	})
	const [localIsBooked, setLocalIsBooked] = useState(false)


	const navigate = useNavigate()
	const {
		checkInDayName,
		checkInDay,
		checkInMonth,
		checkOutDay,
		checkOutDayName,
		checkOutMonth,
		diffDays,
	} = FormDate(startDate, endDate)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setCardData(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSubmitCardData = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!isAuth) {
			navigate('/login')
			return
		}

		const token = localStorage.getItem('access_token')
		if (!token) {
			navigate('/login')
			return
		}

		const bookingData = {
			roomId: Number(id),
			startDate: new Date(startDate).toISOString(),
			endDate: new Date(endDate).toISOString(),
		}

		try {
			const response = await fetch('http://localhost:3000/booking/create', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(bookingData),
			})
			if (!response.ok) {
				throw new Error('Ошибка бронирования')
			}
			const data = await response.json()
			dispatch(setIsBooked({ roomId: Number(id), isBooked: true }))
			setLocalIsBooked(true)
			console.log('Booking created:', data)
			console.log(isBooked)
			// Навигация или сообщение об успехе
		} catch (error) {
			console.error('Ошибка:', error)
		}
	}

	return (
		<div className={styles.bookingPage}>
			<div className={styles.bookingInfoCard}>
				<Card>
					<Typography level='title-lg'> </Typography>
					<div>
						<div className={styles.bookingInfo}>
							<div>
								<Typography fontSize={30} level={'title-md'}>
									{checkInDayName}, {checkInDay} {checkInMonth}
								</Typography>
								<Typography>Check In</Typography>
							</div>
							<div>
								<Typography fontSize={30} level={'title-md'}>
									{checkOutDayName}, {checkOutDay} {checkOutMonth}
								</Typography>
								<Typography>Check Out</Typography>
							</div>
						</div>
						<Typography>цена</Typography>
					</div>
				</Card>
				<Card>
					<div className={styles.cardData}>
						<Typography level={'h4'}>Заполните данные</Typography>
						<form onSubmit={handleSubmitCardData} className={styles.cardForm}>
							<Input
								placeholder='Номер карты'
								name='cardNumber'
								value={cardData.cardNumber}
								onChange={handleChange}
							/>
							<div className={styles.cardDate}>
								<Input
									placeholder='мм'
									name='cardMonth'
									value={cardData.cardMonth}
									onChange={handleChange}
								/>
								<Input
									placeholder='гг'
									name='cardYear'
									value={cardData.cardYear}
									onChange={handleChange}
								/>
							</div>
							<Input
								placeholder='CVV'
								name='cvv'
								value={cardData.cvv}
								onChange={handleChange}
							/>
							<Button disabled={isBooked || localIsBooked} type='submit'>
								{isBooked || localIsBooked
									? 'Уже забронировано'
									: 'Забронировать'}
							</Button>
						</form>
					</div>
				</Card>
			</div>
			<div className={styles.bookingResult}>
				<Card>
					<div>
						<div className={styles.nameImg}>
							<img
								className={styles.image1}
								src={
									roomData && roomData.Image && roomData.Image.length > 0
										? roomData.Image[0].url
										: '/default'
								}
								alt='image'
							/>
							<Typography>{roomData?.name}</Typography>
						</div>
						<div className={styles.details}>
							<div className={styles.detail}>
								<Typography level='body-md'>Детали</Typography>
							</div>
							<div className={styles.detail}>
								Цена за ночь
								<Typography level='body-md'>{roomData?.price}</Typography>
							</div>
							<div className={styles.detail}>
								Количество дней
								<Typography level='body-md'>{diffDays}</Typography>
							</div>
							<div className={styles.detail}>
								Итого
								<Typography level='body-md'>
									{Number(roomData?.price) * diffDays}
								</Typography>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	)
}
