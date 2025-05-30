import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { useEffect, useState } from 'react'
import { RoomResponseDto } from '../../types/dto/RoomResponse.dto'
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

	// const { place, startDate, endDate } = useSelector((state: RootState) => {
	// 	return state.search
	// })
	useEffect(() => {
		try {
			setRooms(testRooms)
			const fetchRooms = async () => {
				const response = await fetch('http://localhost:3000/rooms/get-all')
				const data = await response.json()
				setRooms(data)
				console.log(data)
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
