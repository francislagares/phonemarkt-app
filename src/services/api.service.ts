import axios from 'axios';

import { ProductCart } from '@/models/product';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

class ApiService<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  public getProducts = async () => {
    return axiosInstance
      .get<T>(this.endpoint)
      .then(res => res.data)
      .catch(error =>
        console.log(
          `Something went wrong while fetching all products: ${error}`,
        ),
      );
  };

  public getProduct = async (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + id)
      .then(res => res.data)
      .catch(error =>
        console.log(
          `Something went wrong while fetching the product: ${error}`,
        ),
      );
  };

  public addProduct = async (item: ProductCart) => {
    return axiosInstance
      .post<T>(this.endpoint, item)
      .then(res => res.data)
      .catch(error => console.log(`Error while adding item to cart: ${error}`));
  };
}

export default ApiService;
