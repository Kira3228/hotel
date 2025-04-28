import React from 'react'
import './App.css'

import { MainPage } from './pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { Layout } from './components/Layout/Layout'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RoomList } from './pages/RoomList/RoomList'

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
				element ={
					<Layout>
						<LoginPage/>
					</Layout>
				}/>
				<Route
				path='room-list'
				element = {<RoomList/>}/>
			</Routes>
		</>
	)
}

export default App
