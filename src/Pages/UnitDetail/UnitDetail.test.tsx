import { render, screen } from '@testing-library/react';
import UnitDetail from './UnitDetail';
import { MemoryRouter } from 'react-router-dom';

const mockData = {
    id: 1,
    name: 'Archer',
    description: 'Quick and light. Weak at close range; excels at battle from distance',
    age: 'Feudal',
    cost: {
        Wood: 50,
        Food: 30,
    },
    expansion: "Age of Kings",
    build_time: 35,
    attack_delay: 0.35,
    armor: "0/0",
    reload_time: 2,
    hit_points: 150,
    attack: 25,
    accuracy: '80%',
    movement_rate: 0.96,
    line_of_sight: 6,
    range: 30
};

test('UnitDetail renders with correct data', () => {
    render(<UnitDetail />, {
        wrapper: ({ children }) => (
            <MemoryRouter initialEntries={[{ pathname: "/units/detail/1", state: { data: mockData } }]}>
                {children}
            </MemoryRouter>
        ),
    });
    screen.debug();
    expect(screen.getByText(`Detail for : ${mockData.name}`)).toBeInTheDocument();
    expect(screen.getByTestId('id')).toHaveTextContent(`ID: ${mockData.id}`);
    expect(screen.getByTestId('desc')).toHaveTextContent(`Description: ${mockData.description}`);
    expect(screen.getByTestId('age')).toHaveTextContent(`Minimum Required Age: ${mockData.age}`);
    expect(screen.getByTestId('wood')).toHaveTextContent(`Wood Cost: ${mockData.cost.Wood}`);
    expect(screen.getByTestId('food')).toHaveTextContent(`Food Cost: ${mockData.cost.Food}`);
    expect(screen.getByTestId('build-time')).toHaveTextContent(`Build Time: ${mockData.build_time}`);
    expect(screen.getByTestId('reload-time')).toHaveTextContent(`Reload Time: ${mockData.reload_time}`);
    expect(screen.getByTestId('hit')).toHaveTextContent(`Hit Points: ${mockData.hit_points}`);
    expect(screen.getByTestId('attack')).toHaveTextContent(`Attack: ${mockData.attack}`);
    expect(screen.getByTestId('accuracy')).toHaveTextContent(`Accuracy: ${mockData.accuracy}`);
});
