import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { useEffect, useState } from 'react'
import { RoomResponseDto } from '../../types/dto/RoomResponse.dto'
import { RoomCard } from '../../components/RoomCard/RoomCard'
import { testRoomSet } from './testRoomSet'

export const RoomList: React.FC = () => {
	const [rooms, setRooms] = useState<RoomResponseDto[]>([])
	const [isLoading, setIsLoading] = useState(true)
	// const { place, startDate, endDate } = useSelector((state: RootState) => {
	// 	return state.search
	// })
	useEffect(() => {
		console.log(testRoomSet[0].Image[0].id)
		try {
			const fetchRooms = async () => {
				const response = await fetch('http://localhost:3000/rooms/get-all')
				const data = await response.json()
				setRooms(data)
				console.log(data)
			}
			setIsLoading(false)
			fetchRooms()
		} catch {}
	}, [])
	//   if (isLoading) {
	//     return <>Загрузка...</>;
	//   }
	return (
		<>
			<div>
				{rooms.map(room => (
					<RoomCard
						key={room.id}
						image={room.Image}
						name={room.name}
						price={room.price}
						description={room.description}
					/>
				))}
			</div>
		</>
	)
}
