import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

import { Product } from '@/models/product';
import ApiService from '@/services/api.service';

const apiClient = new ApiService<Product[]>(
  import.meta.env.VITE_API_PRODUCTS_URL,
);

const filterProducts = (searchTerm?: string, data?: any) => {
  const products = data;

  if (!searchTerm) {
    return products;
  }

  const filteredProducts = products.filter((product: Product) => {
    const { brand, model } = product;
    const lowerCasedSearchTerm = searchTerm.toLowerCase();

    return (
      brand.toLowerCase().includes(lowerCasedSearchTerm) ||
      model.toLowerCase().includes(lowerCasedSearchTerm)
    );
  });

  return filteredProducts;
};

const useProducts = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: apiClient.getProducts,
    staleTime: ms('1h'),
    select: products => filterProducts(searchTerm, products),
  });
};

export default useProducts;
