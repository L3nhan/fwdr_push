import logo from './Assignment.png'

const Heading = () => {
    return (
        <>
            <table>
                <tr>
                    <td><img src={logo} width={100} height={100} /></td>
                    <td><h1>Item Management System</h1></td>
                </tr>
            </table>
        </>
    );
}

export default Heading;