import { useQuery } from '@tanstack/react-query';

import { ProductDetail } from '@/models/product';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<ProductDetail>(
  import.meta.env.VITE_API_PRODUCTS_URL,
);

const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['productId', productId],
    queryFn: () => apiClient.getProduct(productId),
  });
};

export default useProduct;
