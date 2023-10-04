import Heading from './Heading'
import MyNav from './NavBar'

const CreateCRUD = () => {
	return (
		<>
			<div className='location-1-1'>
				<Heading />
			</div>
			<div className='location-1-2'></div>
			<div className='location-2-1'>
				<MyNav />
			</div>
			<div className='location-2-2'>
				<h1>This is Create Page (CRUD)</h1>
			</div>
		</>
	)
}

export default CreateCRUD
