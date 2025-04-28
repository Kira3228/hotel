import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { SearchPanel } from '../../components/SearchPanel/SearchPanel'
import { useEffect, useState } from 'react'
import { RoomResponseDto } from '../../types/dto/RoomResponse.dto'

export const RoomList: React.FC = () => {
	const [rooms, setRooms] = useState<RoomResponseDto[]>([])
	// const { place, startDate, endDate } = useSelector((state: RootState) => {
	// 	return state.search
	// })
	useEffect(() => {
		const fetchRooms = async () => {
			const response = await fetch('http://localhost:3000/rooms/get-all')
			const data = await response.json()
			setRooms(data)
			console.log(data)
		}

		fetchRooms()
	}, [])

	return (
		<>
			<div>
				{rooms.map(room => (
					<div key={room.id}>
						{room.Image.map(image =>(
							<img src={image.url} alt={image.url} />
						))}

						{room.name}
					</div>
				))}
			</div>
		</>
	)
}
