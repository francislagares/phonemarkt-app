import axios from 'axios';

export interface FetchResponse<T> {
  products: T[];
}

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
      .get<FetchResponse<T>>(this.endpoint)
      .then(res => res.data)
      .catch(error =>
        console.log(
          `Something went wrong while fetching all products: ${error}`,
        ),
      );
  };
}

export default ApiService;
