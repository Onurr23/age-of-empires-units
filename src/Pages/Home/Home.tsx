import { Image } from 'antd';
import './home.scss';  // CSS dosyasını import et

const Home = () => {
    return (
        <div className="image-container"> {/* CSS sınıfını uygula */}
            <Image
                src={require('../../assets/aoe-wp.jpg')}
                alt="image"
                preview={false}
            />
        </div>
    )
}

export default Home;
