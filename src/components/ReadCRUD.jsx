import { Link } from 'react-router-dom'
import Heading from './Heading'
import MyNav from './NavBar'

const ReadCRUD = () => {
	return (
		<>
			<div className='location-1-1'>
				<Heading /> {/* Heading: Logo, Title */}
			</div>
			<div className='location-1-2'></div>
			<div className='location-2-1'>
				<MyNav />	{/* MyName: Right Vertical Navbar */}
			</div>
			<div className='location-2-2'>
				
				<table className='table table-bordered'> {/* Main workspace */}
				<caption><h1>This is Read Page (CRUD)</h1></caption>
					{/* 3.1. Column Name */}
					<tr>
						<th>Brand</th>
						<th>Model</th>
						<th>Price</th>
						<th>Actions</th>
					</tr>
					{/* 3.2 All records of Table */}
					<tr>
						{/* 3.2.1.1. The record of result */}
						<td>Read brand from array</td>
						<td>Read model from array</td>
						<td>Read price from array</td>
						<td>
							{/* 3.2.1.2. Action Buttons */}
							<Link to='/edit'>
								<button className='btn btn-link'>Update</button>
							</Link>
							|
							<Link>
								<button className='btn btn-link'>Delete</button>
							</Link>
						</td>
					</tr>
				</table>
			</div>
		</>
	)
}

export default ReadCRUD