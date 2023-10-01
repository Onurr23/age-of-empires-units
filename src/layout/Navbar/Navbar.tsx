import { Layout, Menu } from 'antd';
import { navItems } from './constants';
import './navbar.scss'

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header className='header'>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['home']}
                items={navItems}
            />
        </Header>
    )
}

export default Navbar