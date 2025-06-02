export const FormDate = (startDate: string, endDate: string) => {
	const checkInDate = new Date(startDate)
	const checkOutDate = new Date(endDate)
	const checkInDay = checkInDate.getDate()
	const checkInDayName = checkInDate.toLocaleDateString('ru-RU', {
		weekday: 'long',
	})
	const checkInMonth = checkInDate.toLocaleDateString('ru-RU', {
		month: 'long',
	})
	const checkOutDay = checkOutDate.getDate()
	const checkOutMonth = checkOutDate.toLocaleDateString('ru-RU', {
		month: 'long',
	})
	const checkOutDayName = checkOutDate.toLocaleDateString('ru-RU', {
		weekday: 'long',
	})
	const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime())
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
	return {
		checkInDay,
		checkInDayName,
		checkInMonth,
		checkOutDay,
		checkOutMonth,
		checkOutDayName,
		diffDays,
	}
}
