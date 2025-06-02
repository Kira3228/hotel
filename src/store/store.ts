// store.ts
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // по умолчанию localStorage
import searchReducer from './searchSlice'
import { combineReducers } from 'redux'
import isBookedReduser from './bookedSlice'

// Конфигурация persist для конкретного редьюсера
const searchPersistConfig = {
	key: 'search',
	storage,
}
const isBookedPersistConfig = {
	key: 'isBooked',
	storage,
	whitelist: ['isBooked'], // Убедитесь, что ключ состояния указан верно
}

const rootReducer = combineReducers({
	search: persistReducer(searchPersistConfig, searchReducer),
	isBooked: persistReducer(isBookedPersistConfig, isBookedReduser),
})

export const store = configureStore({
	reducer: rootReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
