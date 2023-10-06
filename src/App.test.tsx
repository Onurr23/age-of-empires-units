import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { MemoryRouter } from 'react-router-dom';

test('renders Navbar and Router without errors', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const navbarElement = getByText('Home');
  expect(navbarElement).toBeInTheDocument();

  const routerElement = getByText('Units');
  expect(routerElement).toBeInTheDocument();
});
