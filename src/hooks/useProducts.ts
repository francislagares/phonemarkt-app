import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Product } from '@/models/product';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Product[]>(
  import.meta.env.VITE_API_PRODUCTS_URL,
);

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getProducts,
    staleTime: ms('1h'),
  });
};

export default useProducts;
