import React from 'react'
import './App.css'

import { MainPage } from './pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { Layout } from './components/Layout/Layout'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RoomList } from './pages/RoomList/RoomList'
import RoomPage from './pages/RoomPage/RoomPage'
import { BookingPage } from './pages/BookingPage/BookingPage'
import { AuthProvider } from './Context/AuthContext'

const App: React.FC = () => {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route
						path='/'
						element={
							<Layout>
								<MainPage />
								{/* <RoomList/> */}
							</Layout>
						}
					></Route>
					<Route
						path='registration'
						element={
							<Layout>
								<RegisterPage />
							</Layout>
						}
					/>
					<Route
						path='login'
						element={
							<Layout>
								<LoginPage />
							</Layout>
						}
					/>
					<Route
						path='room-list'
						element={
							<Layout>
								<RoomList />
							</Layout>
						}
					/>
					<Route
						path='/room-list/room/:id'
						element={
							<Layout>
								<RoomPage />
							</Layout>
						}
					/>
					<Route
						path='/booking/:id'
						element={
							<Layout>
								<BookingPage />
							</Layout>
						}
					/>
				</Routes>
			</AuthProvider>
		</>
	)
}

export default App
