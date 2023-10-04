import { Link } from 'react-router-dom'

const MyNav = () => {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <Link to='/'><button
                        className='btn btn-info'>Home</button></Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Link to='/add'><button
                        className='btn btn-info'>Add new</button></Link>
                    </td>
                </tr>
                <tr>
                    <td>
                    <button className='btn btn-info'>Utilities</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='btn btn-info'>About</button>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default MyNav;