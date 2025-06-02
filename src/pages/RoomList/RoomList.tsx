import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useEffect, useState } from 'react'
import { Booking, RoomResponseDto } from '../../types/dto/RoomResponse.dto'
import { testRoomSet } from './testRoomSet'
import './RoomList.scss'
import { SearchPanel } from '../../shared/SearchPanel/SearchPanel'
import { RoomCard } from '../../shared/RoomCard/RoomCard'
import { FilterLayout } from '../../components/FilterLayout/FilterLayout'
import RangeSlider from '../../components/DoubleSlider/DoubleSlider'
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton'
import { Filters } from '../../shared/Filters/Filters'
import { useNavigate } from 'react-router-dom'
import { testRooms } from '../../DevData/Rooms'

export const RoomList: React.FC = () => {
	const [rooms, setRooms] = useState<RoomResponseDto[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const navigate = useNavigate()

	const {  startDate, endDate } = useSelector((state: RootState) => {
		return state.search
	})
	const getLastBooking = (bookings: Booking[]): Booking | null => {
		if (bookings.length === 0) return null
		return bookings.reduce((latest, current) =>
			new Date(current.endDate) > new Date(latest.endDate) ? current : latest
		)
	}
	const isAvailable = (bookings: Booking[]) => {
		const lastBooking = getLastBooking(bookings)
		if (!lastBooking) return true // если нет бронирований — доступна
		return new Date(startDate) >= new Date(lastBooking.endDate)
	}
	useEffect(() => {
		try {
			// setRooms(testRooms)
			const fetchRooms = async () => {
				const response = await fetch('http://localhost:3000/rooms/get-all')
				const data: RoomResponseDto[] = await response.json()
				if (showAllRooms) {
					setRooms(data)
				} else {
					const availableRooms = data.filter(room => isAvailable(room.Booking))
					setRooms(availableRooms)
				}
			}
			setIsLoading(false)
			fetchRooms()
		} catch {
			setRooms(testRoomSet)
		}
	}, [])
	//   if (isLoading) {
	//     return <>Загрузка...</>;
	//   }
	return (
		<>
			<SearchPanel />
			<section className='list'>
				<Filters />
				<div>
					{rooms.map(room => (
						<RoomCard
							key={room.id}
							onClick = {() => navigate(`room/${room.id}`)}
							image={room.Image}
							name={room.name}
							price={room.price}
							description={room.description}
						/>
					))}
				</div>
			</section>
		</>
	)
}
