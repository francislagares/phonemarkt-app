import { Link } from 'react-router-dom';

import { Product } from '@/models/product';

import classes from './product.module.scss';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <div className={classes.productCard}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imgUrl} alt={product.brand} />
        <h3>{product.brand}</h3>
        <p>{product.model}</p>
        <p className={classes.price}>
          Price:{' '}
          <span>{product.price ? `${product.price}€` : 'not available'}</span>
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
