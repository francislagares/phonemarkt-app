import useProducts from '@/hooks/useProducts';
import Header from '@/layouts/header';

const Home = () => {
  const { data: products, isLoading, error } = useProducts();

  console.log(products);

  if (isLoading) return 'Wait while we are fetching content...';

  if (error) throw error;

  return (
    <>
      <Header />
      <h1>Product List</h1>
    </>
  );
};

export default Home;
