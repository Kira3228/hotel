import { useEffect, useState } from 'react'

export const useFetch = <T>(endPoint: string) => {
	const [data, setData] = useState<T>()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endPoint)
				if (!response.ok) {
					throw new Error('ошибка загрузки данных')
				}
				const data: T = await response.json()
				setData(data)
			} catch (error) {
				console.error('Ошибка загрузки:', error)
			}
		}
		fetchData()
	}, [endPoint])
	return data
}
