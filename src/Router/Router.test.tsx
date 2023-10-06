import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Router from './Router';

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { },
    };
};

beforeAll(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { },
        };
    };
});

test('renders correct routes', () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/units']}>
                <Router />
            </MemoryRouter>
        </Provider>
    );

    expect(screen.getByText('Ages')).toBeInTheDocument();
});

test('renders Not Found page for unknown route', () => {
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={['/unknown']}>
                <Router />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByText('NOT FOUND')).toBeInTheDocument();
});
