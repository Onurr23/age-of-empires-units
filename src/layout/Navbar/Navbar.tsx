import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} className='header'>
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="units">
                <Link to="/units">Units</Link>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar