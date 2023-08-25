import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { createQueryClientWrapper } from '@/test/utils';

import useProducts from '../useProducts';

describe('useProducts hook', () => {
  it('gets all products', async () => {
    const { result } = renderHook(() => useProducts(), {
      wrapper: createQueryClientWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toBeDefined();
  });
});
