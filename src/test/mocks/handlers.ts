import { rest } from 'msw';

import { mockProducts } from './mockProducts';

export const handlers = [
  rest.get(
    import.meta.env.VITE_API_BASE_URL + '/api/product',
    (_req, res, ctx) => {
      return res(ctx.json(mockProducts));
    },
  ),
];
