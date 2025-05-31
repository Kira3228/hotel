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
import { PersonalAccountLayout } from './shared/PersonalAccountLayout/PersonalAccount'

const App: React.FC = () => {
	return (
		<>
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
					path='/booking'
					element={
						<Layout>
							<BookingPage />
						</Layout>
					}
				/>
				<Route path='/account'
					element={<Layout>
						<PersonalAccountLayout>
							asd
						</PersonalAccountLayout>
					</Layout>} />
			</Routes>
		</>
	)
}

export default App
