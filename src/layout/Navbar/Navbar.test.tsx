import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

test('Navbar renders correctly', () => {
    render(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');

    const unitsLink = screen.getByText('Units');
    expect(unitsLink).toBeInTheDocument();
    expect(unitsLink.getAttribute('href')).toBe('/units');
});
