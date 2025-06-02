import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IsBookedState {
	[roomId: number]: boolean
}

const initialState: IsBookedState = {}

const isBookedSlice = createSlice({
	name: 'isBooked',
	initialState,
	reducers: {
		setIsBooked: (
			state,
			action: PayloadAction<{ roomId: number; isBooked: boolean }>
		) => {
			state[action.payload.roomId] = action.payload.isBooked
		},
		resetIsBookedForRoom: (state, action: PayloadAction<number>) => {
			delete state[action.payload] // или state[action.payload] = false
		},
		resetAllBookings: state => {
			return initialState
		},
	},
})

export const { setIsBooked, resetIsBookedForRoom } = isBookedSlice.actions
export default isBookedSlice.reducer
