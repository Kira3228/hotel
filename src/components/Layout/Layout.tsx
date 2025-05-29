import React from 'react'
import { useLocation } from 'react-router-dom'

import './Layout.scss'
import { Header } from '../../shared/Header/Header'

type LayoutProps = {
	children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const location = useLocation()
	const isMainPage = location.pathname === '/'
	return (
		<div className={`${isMainPage ? 'main-layout' : 'default-layout'}`}>
			<Header isTransparent={isMainPage} />
			<main className='main'>{children}</main>
		</div>
	)
}
