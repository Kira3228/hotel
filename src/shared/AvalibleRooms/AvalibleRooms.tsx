import { useEffect, useState } from 'react'
import styles from './AvalibleRooms.module.scss'
import { data, useNavigate } from 'react-router-dom'
import { RoomMiniCard } from '../RoomMiniCard/RoomMiniCard'
import { Button } from 'primereact/button'

type RoomData = {
	id: number
	name: string
	description: string
	capacity: number
	price: number
	status: string
	area: number
	rating: number
	Image: Image[]
}
type Image = {
	id: number
	fileName: string
	url: string
	path: string
	roomId: number
}

export const AvalibleRooms: React.FC = () => {
	const [roomData, setRoomData] = useState<RoomData[]>([])
	const navigate = useNavigate()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:3000/rooms/avalible')
				if (!response.ok) {
					throw new Error('Ошибка при получении данных')
				}
				const data: RoomData[] = await response.json()
				setRoomData(data)
			} catch (error) {
				console.error('Произошла ошибка:', error)
			}
		}
		fetchData()
	}, [])
	const miniCardClick = () => {}
	return (
		<>
			<span className={styles.header}>Свободные комнаты</span>
			{roomData.map(room => (
				<div key={room.id}>
					<RoomMiniCard
						alt={'image'}
						url={room.Image[0]?.url || '/default.jpg'}
						name={room.name}
						price={room.price}
						rating={room.rating}
						onClick={() => {
							return navigate(`/room-list/room/${room.id}`)
						}}
					/>
				</div>
			))}
		</>
	)
}
