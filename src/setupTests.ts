import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import axios from 'axios';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';

import { server } from './test/mocks/server';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

// mocking methods which are not implemented in JSDOM
beforeAll(() => {
  server.listen();

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
