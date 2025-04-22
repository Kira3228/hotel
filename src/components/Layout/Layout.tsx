import React from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from '../Header/Header'
import './Layout.scss'

type LayoutProps = {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation()
	const isMainPage = location.pathname === '/'
	return (
		<div>
			<Header isTransparent={isMainPage} />
			<main className='main'>{children}</main>
		</div>
	)
}
