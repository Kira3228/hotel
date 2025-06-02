// store/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SearchData {
	place: string
	startDate: string
	endDate: string
}

const initialState: SearchData = {
	place: '',
	startDate: '',
	endDate: '',
}

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchData: (state, action: PayloadAction<SearchData>) => {
			state.place = action.payload.place
			state.startDate = action.payload.startDate
			state.endDate = action.payload.endDate
		},
	},
})

export const { setSearchData } = searchSlice.actions
export default searchSlice.reducer
