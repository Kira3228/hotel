import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './store/store.ts'
import { PrimeReactProvider } from 'primereact/api'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<Provider store={store}>
				<BrowserRouter>
					<PrimeReactProvider>
						<PersistGate loading={null} persistor={persistor}>
							<App />
						</PersistGate>
					</PrimeReactProvider>
				</BrowserRouter>
			</Provider>
		</AuthProvider>
	</StrictMode>
)
