import { BrowserRouter } from 'react-router-dom';
import { describe, it } from 'vitest';

import { renderWithQueryClient } from '@/test/utils';

import Home from './index';

describe('Home Page', () => {
  it('renders without crashing', async () => {
    renderWithQueryClient(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });
});
