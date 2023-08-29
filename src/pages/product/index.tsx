import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import useProduct from '@/hooks/useProduct';
import { Color, ProductDetail } from '@/models/product';

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
  const [selectedColors, setSelectedColors] = useState<number>();
  const [selectedStorage, setSelectedStorage] = useState<number>();

  useEffect(() => {
    setSelectedColors(product?.options.colors[0].code);
    setSelectedStorage(product?.options.storages[0].code);
  }, [product]);

  const handleColorChange = (code: number) => {
    setSelectedColors(code);
  };

  const handleStorageChange = (code: number) => {
    console.log(code);
    setSelectedStorage(code);
  };

  const productDetails = propertiesToShow.map(property => (
    <p key={property}>
      <span className={classes.bold}>
        {property.charAt(0).toUpperCase() + property.slice(1)}:{' '}
      </span>
      {Array.isArray(product?.[property])
        ? (product?.[property] as string[]).join(', ')
        : product?.[property] || 'not available'}
    </p>
  ));

  const productStorages = product?.options?.storages.map((storage: Storage) => (
    <label key={storage.code} className='mr-2'>
      <input
        type='radio'
        name='storage'
        value={storage.code}
        onChange={() => handleStorageChange(storage.code)}
        checked={selectedStorage === storage.code}
        className='mr-1'
      />
      {storage.name}
    </label>
  ));

  const productColors = product?.options?.colors.map((color: Color) => (
    <label key={color.code} className='mr-2'>
      <input
        type='radio'
        name='color'
        value={color.code}
        onChange={() => handleColorChange(color.code)}
        checked={selectedColors === color.code}
        className='mr-1'
      />
      {color.name}
    </label>
  ));

  const handleClick = () => {
    console.log('Clicked', { selectedColors, selectedStorage });
  };

  if (isLoading) return null;

  if (error) throw error;

  return (
    <div className={classes.productDetail}>
      <div className={classes.leftColumn}>
        <div className={classes.productImage}>
          <img src={product?.imgUrl} alt='Product Image' />
        </div>
      </div>
      <div className={classes.rightColumn}>
        <div className={classes.productDescription}>
          <h2>{product?.brand}</h2>
          {productDetails}
        </div>
        <div className={classes.productConfig}>
          <div className={classes.cableConfig}>
            <span>Storage</span>
            <div className={classes.cableChoose}>{productStorages}</div>
          </div>
          <div className={classes.productColor}>
            <span>Color</span>
            <div className={classes.colorSelector}>{productColors}</div>
          </div>
          <div>
            <button onClick={handleClick}>Add to Basket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
