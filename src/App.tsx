import React from 'react'
import './App.css'

import { MainPage } from './pages/MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { Header } from './components/Header/Header'
import { Layout } from './components/Layout/Layout'

const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<Layout>
							<MainPage />
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
			</Routes>
		</>
	)
}

export default App
