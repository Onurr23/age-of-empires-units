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
    console.log(data);
    return (
        <Card title={`Detail for : ${name}`}>
            <div data-testid="id">
                <p>
                    <strong>ID:</strong> {id}
                </p>
                <p>
                    <strong>Name:</strong> {name}
                </p>
            </div>
            <p data-testid="desc">
                <strong>Description:</strong> {description}
            </p>
            <p data-testid="age">
                <strong>Minimum Required Age:</strong> {age}
            </p>
            <p data-testid="wood">
                <strong>Wood Cost:</strong> {cost?.Wood ? cost.Wood : '-'}
            </p>
            <p data-testid="food">
                <strong>Food Cost:</strong> {cost?.Food ? cost.Food : '-'}
            </p>
            <p data-testid="gold">
                <strong>Gold Cost:</strong> {cost?.Gold ? cost.Gold : '-'}
            </p>
            <p data-testid="build-time">
                <strong>Build Time:</strong> {build_time}
            </p>
            <p data-testid="reload-time">
                <strong>Reload Time:</strong> {reload_time}
            </p>
            <p data-testid="hit">
                <strong>Hit Points:</strong> {hit_points}
            </p>
            <p data-testid="attack">
                <strong>Attack:</strong> {attack}
            </p>
            <p data-testid="accuracy">
                <strong>Accuracy:</strong> {accuracy}
            </p>
        </Card>
    );
};

export default UnitDetail;
