import React, { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
	isAuth: boolean
	login: () => void
	logout: () => void
}
const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isAuth, setIsAuth] = useState<boolean>(
		!!localStorage.getItem('access_token')
	)

	const login = () => {
		setIsAuth(true)
	}
	const logout = () => {
		localStorage.removeItem('access_token')
		setIsAuth(false)
	}
	useEffect(() => {
		const token = localStorage.getItem('access_token')
		setIsAuth(!!token)
	}, [])
	return (
		<AuthContext.Provider value={{ isAuth, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
export const useAuth = () => {
	const context = useContext(AuthContext)
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
