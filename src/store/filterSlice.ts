// store/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FilterState {
	rating: string
	capacity: string
	isAvailable: boolean
}

const initialState: FilterState = {
	rating: '',
	capacity: '',
	isAvailable: false,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setRating: (state, action: PayloadAction<string>) => {
			state.rating = action.payload
		},
		setCapacity: (state, action: PayloadAction<string>) => {
			state.capacity = action.payload
		},
		setIsAvailable: (state, action: PayloadAction<boolean>) => {
			state.isAvailable = action.payload
		},
		resetFilters: state => {
			state.rating = ''
			state.capacity = ''
			state.isAvailable = false
		},
	},
})

export const { setRating, setCapacity, setIsAvailable, resetFilters } =
	filterSlice.actions

export default filterSlice.reducer
