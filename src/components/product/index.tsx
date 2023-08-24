import { Product } from '@/models/product';

import classes from './product.module.scss';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <div className={classes.product}>
      <img src={product.imgUrl} alt={product.brand} />
      <h3>{product.brand}</h3>
      <p>{product.model}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};

export default ProductItem;
