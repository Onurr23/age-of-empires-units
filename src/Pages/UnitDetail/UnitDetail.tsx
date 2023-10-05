import { Card } from "antd";
import { useLocation } from "react-router-dom";
import './unitDetail.scss';

const UnitDetail = () => {
    const location = useLocation();
    const { data } = location.state;
    const {
        id,
        name,
        description,
        age,
        cost,
        build_time,
        attack,
        accuracy,
        hit_points,
        reload_time
    } = data;

    return (
        <Card title={`Detail for : ${name}`}>
            <p>
                <strong>ID:</strong> {id}
            </p>
            <p>
                <strong>Name:</strong> {name}
            </p>
            <p>
                <strong>Description:</strong> {description}
            </p>
            <p>
                <strong>Minimum Required Age:</strong> {age}
            </p>
            <p>
                <strong>Wood Cost:</strong> {cost?.Wood ? cost.Wood : '-'}
            </p>
            <p>
                <strong>Food Cost:</strong> {cost?.Food ? cost.Food : '-'}
            </p>
            <p>
                <strong>Gold Cost:</strong> {cost?.Gold ? cost.Gold : '-'}
            </p>
            <p>
                <strong>Build Time:</strong> {build_time}
            </p>
            <p>
                <strong>Reload Time:</strong> {reload_time}
            </p>
            <p>
                <strong>Hit Points:</strong> {hit_points}
            </p>
            <p>
                <strong>Attack:</strong> {attack}
            </p>
            <p>
                <strong>Accuracy:</strong> {accuracy}
            </p>
        </Card>
    );
};

export default UnitDetail;
