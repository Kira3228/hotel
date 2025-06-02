import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Hooks/reduxHooks'
import { Booking, RoomResponseDto } from '../../types/dto/RoomResponse.dto'
import { testRoomSet } from './testRoomSet'
import './RoomList.scss'
import { SearchPanel } from '../../shared/SearchPanel/SearchPanel'
import { RoomCard } from '../../shared/RoomCard/RoomCard'
import { Filters } from '../../shared/Filters/Filters'

export const RoomList: React.FC = () => {
	const [allRooms, setAllRooms] = useState<RoomResponseDto[]>([])
	const [rooms, setRooms] = useState<RoomResponseDto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const navigate = useNavigate()

	const { rating, capacity, isAvailable } = useAppSelector(
		state => state.filter
	)
	const { startDate, endDate } = useAppSelector(state => state.search) // ✅ Используем даты из store

	// Проверка доступности комнаты по бронированиям
	const checkAvailableByDate = (bookings: any[]) => {
		if (!startDate || !endDate) return true
		if (!bookings.length) return true

		const start = new Date(startDate)
		const end = new Date(endDate)

		// находим последнее бронирование по полю `date` (когда была сделана бронь)
		const lastBooking = bookings.reduce((latest, current) => {
			return new Date(current.date) > new Date(latest.date) ? current : latest
		})

		const bookingStart = new Date(lastBooking.startDate)
		const bookingEnd = new Date(lastBooking.endDate)

		// проверка на пересечение
		return end <= bookingStart || start >= bookingEnd
	}

	useEffect(() => {
		const fetchRooms = async () => {
			try {
				const response = await fetch('http://localhost:3000/rooms/get-all')
				const data: RoomResponseDto[] = await response.json()
				setAllRooms(data)
				setRooms(data)
			} catch {
				setAllRooms(testRoomSet)
				setRooms(testRoomSet)
			} finally {
				setIsLoading(false)
			}
		}
		fetchRooms()
	}, [])

	// Применение всех фильтров
	useEffect(() => {
		let filtered = [...allRooms]

		if (rating) {
			filtered = filtered.filter(
				room => Math.round(room.rating) === Number(rating)
			)
		}

		if (capacity) {
			filtered = filtered.filter(room => room.capacity >= Number(capacity))
		}

		if (isAvailable) {
			filtered = filtered.filter(room => checkAvailableByDate(room.Booking))
		}

		setRooms(filtered)
	}, [rating, capacity, isAvailable, allRooms, startDate, endDate])

	return (
		<>
			<SearchPanel />
			<section className='list'>
				<Filters />
				<div>
					{isLoading ? (
						<p>Загрузка...</p>
					) : rooms.length ? (
						rooms.map(room => (
							<RoomCard
								key={room.id}
								onClick={() => navigate(`room/${room.id}`)}
								image={room.Image}
								name={room.name}
								price={room.price}
								description={room.description}
							/>
						))
					) : (
						<p>Нет подходящих номеров</p>
					)}
				</div>
			</section>
		</>
	)
}
