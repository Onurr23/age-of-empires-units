import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
    test('should render the Image component with correct props', () => {
        const { getByAltText } = render(<Home />);

        const imageComponent = getByAltText('image');
        expect(imageComponent).toBeInTheDocument();

        expect(imageComponent).toHaveAttribute("src", "aoe-wp.jpg");

    });
});
