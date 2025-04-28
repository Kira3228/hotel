export type RoomResponseDto = {
	id: number
	name: string
	description: string
	capacity: number
	price: string
	status: string
	area: number
	Image: [
		{
			id: number
			fileName: string
			url: string
			path: string
			roomId: number
		}
	]
}
