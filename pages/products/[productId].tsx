import { Container } from '@mantine/core';
import Image from 'next/image';

import myLoader from '../../helper/myLoader';
import imageSize from '../../public/images/size.png';

import { GetServerSideProps } from 'next';
import { useState } from 'react';
import dbConnect from '../../lib/dbConnect';
import ProductModel, { IProduct } from '../../models/Product';
import { addProduct } from '../../redux/cartSlice';
import { useAppDispatch } from '../../redux/hooks';
import classes from '../../styles/Product.module.scss';

const Product = ({
  product: pizza,
  error,
}: {
  product: IProduct;
  error: Error;
}) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);

  const dispatch = useAppDispatch();

  if (error) return 'Error';

  console.log('price: ', price);
  console.log('size: ', size);
  console.log('quantity: ', quantity);
  console.log('Extras: ', extras);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...pizza,
        unitPrice: price / quantity,
        totalCartItemPrice: price,
        size,
        quantity,
        extraOptions: extras,
      })
    );
  };
  const changeQuantityHandler = (e) => {
    const q = e.target.value;
    const priceWithOutQuantity = price / quantity;
    setQuantity(q);
    setPrice(priceWithOutQuantity * q);
  };

  const changeSizeHandler = (z) => {
    if (z === size) return;
    const priceWithOutSize = price - pizza.prices[size] * quantity;

    setPrice(priceWithOutSize + pizza.prices[z] * quantity);
    setSize(z);
  };

  const changeExtraHandler = (e, extra) => {
    const extraPrice = extra.price;
    const isChecked = e.target.checked;
    if (isChecked) {
      setPrice((prev) => prev + extraPrice * quantity);
      setExtras((prev) => [...prev, extra]);
    } else {
      setPrice((prev) => prev - extraPrice * quantity);
      setExtras((prev) => prev.filter((e) => e._id !== extra._id));
    }
  };

  return (
    <Container size="xl">
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            loader={myLoader}
            src={pizza.img}
            alt="pizza"
            width={500}
            height={500}
            priority
            objectFit="contain"
          />
        </div>
        <div className={classes.details}>
          <h1 className={classes.title}>{pizza?.title}</h1>
          <h3 className={classes.price}>${price}</h3>
          <p className={classes.desc}>{pizza?.desc}</p>
          <form onSubmit={submitHandler}>
            <h3 className={classes.supTitle}>Choose the size</h3>
            <div className={classes.sizes}>
              <div
                className={classes.small}
                onClick={() => changeSizeHandler(0)}
              >
                <Image
                  src={imageSize}
                  alt="small size"
                  objectFit="contain"
                  height={45}
                  width={45}
                />
                <div>Small</div>
              </div>
              <div
                className={classes.medium}
                onClick={() => changeSizeHandler(1)}
              >
                <Image
                  src={imageSize}
                  alt="medium size"
                  objectFit="contain"
                  height={60}
                  width={60}
                />
                <div>Medium</div>
              </div>
              <div
                className={classes.large}
                onClick={() => changeSizeHandler(2)}
              >
                <Image
                  src={imageSize}
                  alt="large size"
                  objectFit="contain"
                  height={75}
                  width={75}
                />
                <div>Large</div>
              </div>
            </div>
            <h3 className={classes.supTitle}>Choose additional ingredients</h3>
            <div className={classes.ingredients}>
              {pizza.extraOptions.map((extra) => (
                <label key={extra._id} htmlFor={extra._id}>
                  <input
                    type="checkbox"
                    name={extra.text}
                    id={extra._id}
                    onChange={(e) => changeExtraHandler(e, extra)}
                  />
                  {extra.text}
                </label>
              ))}
            </div>
            <div className={classes.submit}>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min={1}
                step={1}
                value={quantity}
                onChange={changeQuantityHandler}
              />
              <button type="submit">Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Product;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  try {
    const { productId } = params;
    await dbConnect();
    const result = await ProductModel.findById(productId);
    const product = await JSON.parse(JSON.stringify(result));
    return {
      props: { product },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};
