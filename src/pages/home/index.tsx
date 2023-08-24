import ProductItem from '@/components/product';
import useProducts from '@/hooks/useProducts';
import { Product } from '@/models/product';

import classes from './home.module.scss';

const Home = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return 'Wait while we are fetching content...';

  if (error) throw error;

  return (
    <div className={classes.container}>
      {products?.map((item: Product) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;
