/* eslint-disable */


import React from 'react';
import Navbar from './Navbar';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

test('Navbar renders correctly', () => {
    const { getByText } = render(<Navbar />);

    const homeLink = getByText('Home');
    const unitsLink = getByText('Units');

    expect(homeLink).toBeInTheDocument();
    expect(unitsLink).toBeInTheDocument();

    expect(homeLink.parentElement?.getAttribute('aria-selected')).toBe('true');
});

// test('Navbar renders correctly and navigates to correct routes', () => {
//     const history = createMemoryHistory();
//     const { getByText } = render(
//         <Router history={history}>
//             <Navbar />
//         </Router>
//     );

//     const homeLink = getByText('Home');
//     const unitsLink = getByText('Units');

//     expect(homeLink).toBeInTheDocument();
//     expect(unitsLink).toBeInTheDocument();

//     fireEvent.click(unitsLink);
//     expect(history.location.pathname).toBe('/units');

//     fireEvent.click(homeLink);
//     expect(history.location.pathname).toBe('/');
// });

