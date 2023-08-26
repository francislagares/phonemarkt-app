import { Link } from 'react-router-dom';

import { Product } from '@/models/product';

import classes from './product.module.scss';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <div className={classes.product}>
      <Link to={`/product/${product.id}`}>
        <img src={product.imgUrl} alt={product.brand} />
        <h3>{product.brand}</h3>
        <p>{product.model}</p>
        <p>
          Price:{' '}
          <span className={classes.product__price}>{product.price}€</span>
        </p>
      </Link>
    </div>
  );
};

export default ProductItem;
