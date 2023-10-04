import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateCRUD from './components/CreateCRUD'
import UpdateCRUD from './components/UpdateCRUD.jsx'
import ReadCRUD from './components/ReadCRUD'
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<ReadCRUD />} />
					<Route path='/add' element={<CreateCRUD />} />
					<Route path='/edit' element={<UpdateCRUD />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
