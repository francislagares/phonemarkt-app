import { useParams } from 'react-router-dom';

import useProduct from '@/hooks/useProduct';
import { ProductDetail } from '@/models/product';

import classes from './product.module.scss';

const propertiesToShow: (keyof ProductDetail)[] = [
  'brand',
  'model',
  'price',
  'internalMemory',
  'ram',
  'os',
  'displayResolution',
  'battery',
  'primaryCamera',
  'dimentions',
  'weight',
];

const Product = () => {
  const { productId } = useParams();
  const { data: product, isLoading, error } = useProduct(productId || '');

  console.log(product);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className={classes.productDetail}>
      <div className={classes.productImage}>
        <img src={product?.imgUrl} alt='Product Image' />
      </div>
      <div className={classes.productDescription}>
        <h2>{product?.brand}</h2>
        {propertiesToShow.map(property => (
          <p key={property}>
            <span className={classes.bold}>
              {property.charAt(0).toUpperCase() + property.slice(1)}:{' '}
            </span>
            {Array.isArray(product?.[property])
              ? (product?.[property] as string[]).join(', ')
              : product?.[property] || 'not available'}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Product;
