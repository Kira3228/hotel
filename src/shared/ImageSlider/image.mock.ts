export const images: ImageType[] = [
	{
		id: 1,
		fileName: 'hotel-room-101.jpg',
		url: 'https://example.com/images/hotel-room-101.jpg',
		path: '/uploads/images/hotel-room-101.jpg',
		roomId: 101,
	},
	{
		id: 2,
		fileName: 'hotel-room-101-bathroom.jpg',
		url: 'https://example.com/images/hotel-room-101-bathroom.jpg',
		path: '/uploads/images/hotel-room-101-bathroom.jpg',
		roomId: 101,
	},
	{
		id: 3,
		fileName: 'hotel-room-202.jpg',
		url: 'https://example.com/images/hotel-room-202.jpg',
		path: '/uploads/images/hotel-room-202.jpg',
		roomId: 202,
	},
	{
		id: 4,
		fileName: 'hotel-lobby.jpg',
		url: 'https://example.com/images/hotel-lobby.jpg',
		path: '/uploads/images/hotel-lobby.jpg',
		roomId: 0, // 0 для общественных помещений
	},
	{
		id: 5,
		fileName: 'hotel-pool.jpg',
		url: 'https://example.com/images/hotel-pool.jpg',
		path: '/uploads/images/hotel-pool.jpg',
		roomId: 0,
	},
]

export type ImageType = {
	id: number
	fileName: string
	url: string
	path: string
	roomId: number
}
