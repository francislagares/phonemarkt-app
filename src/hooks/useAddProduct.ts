import { useMutation } from '@tanstack/react-query';

import { ProductCart } from '@/models/product';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<ProductCart>(
  import.meta.env.VITE_API_PRODUCT_CART,
);

const useAddProduct = () => {
  return useMutation(['addProduct'], {
    mutationFn: (item: ProductCart) => apiClient.addProduct(item),
  });
};

export default useAddProduct;
