// store.ts
import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // по умолчанию localStorage
import searchReducer from './searchSlice'
import { combineReducers } from 'redux'

// Конфигурация persist для конкретного редьюсера
const searchPersistConfig = {
	key: 'search',
	storage,
}

const rootReducer = combineReducers({
	search: persistReducer(searchPersistConfig, searchReducer),
})

export const store = configureStore({
	reducer: rootReducer,
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
