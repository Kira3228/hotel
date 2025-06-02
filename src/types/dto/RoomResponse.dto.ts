export type RoomResponseDto = {
	id: number
	name: string
	description: string
	capacity: number
	price: string
	status: string
	rating: number
	area: number
	Image: ImageType[]
	Booking: Booking[]
}
export type ReviewType = { 
	id: number,
	rating: number,
	content: string,

}
export type ImageType = {
	id: number
	fileName: string
	url: string
	path: string
	roomId: number
}
export type Booking = {
	id: number
	startDate: Date
	endDate: Date
	date: Date
	totalPrice: string
	status: string
	roomId: number
	userId: number
}
