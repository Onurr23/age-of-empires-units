import { Image } from 'antd';
import './home.scss';

const Home = () => {
    return (
        <div className="image-container">
            <Image
                src={require('../../assets/aoe-wp.jpg')}
                alt="image"
                preview={false}
            />
        </div>
    )
}

export default Home;
