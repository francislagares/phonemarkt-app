import axios from 'axios';

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
}

export default ApiService;
