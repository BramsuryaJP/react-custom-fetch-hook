import logo from './logo.svg'
import './App.css'
import DashboardPage from './pages/dashboard'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route index element={<DashboardPage />} />
			</Routes>
		</div>
	)
}

export default App
