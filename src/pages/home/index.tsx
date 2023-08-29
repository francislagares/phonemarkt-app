import { useState } from 'react';

import ProductItem from '@/components/product';
import Search from '@/components/search';
import useProducts from '@/hooks/useProducts';
import { Product } from '@/models/product';

import classes from './home.module.scss';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products, isLoading, error } = useProducts(searchTerm);

  if (isLoading) return 'Wait while we are fetching content...';

  if (error) throw error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Search value={searchTerm} onChange={handleChange} />
      <div className={classes.grid}>
        {products?.map((item: Product) => (
          <ProductItem key={item.id} product={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
