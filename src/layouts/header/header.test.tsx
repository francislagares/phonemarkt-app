import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

import { store } from '@/redux/store';
import { renderWithQueryClient } from '@/test/utils';

import Header from './index';

describe('Header Component', () => {
  beforeEach(() => {
    renderWithQueryClient(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        ,
      </Provider>,
    );
  });

  it('renders the heading correctly', () => {
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/PhoneMarkt/i);
  });
});
