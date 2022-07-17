import { Container } from '@mantine/core';
import Image from 'next/image';

import { useRouter } from 'next/router';
import myLoader from '../helper/myLoader';
import axiosInstance from '../lib/axios';
import { useAppSelector } from '../redux/hooks';
import classes from '../styles/Cart.module.scss';

const Cart = () => {
  const router = useRouter();
  const { cartItems, totalCartPrice, TotalCartQuantity } = useAppSelector(
    (state) => state.cart
  );

  const checkoutHandler = async () => {
    const { data } = await axiosInstance.post(`/api/create-checkout-session`, {
      cartItems,
    });
    console.log(data);
    if (data.url) {
      router.push(data.url);
    }
  };
  return (
    <Container size="xl">
      <div className={classes.container}>
        <div className={classes.table}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Extra</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((product) => (
                <tr key={`${product._id}_${product.totalCartItemPrice}`}>
                  <td className={classes.imgContainer}>
                    <Image
                      alt=""
                      loader={myLoader}
                      src={product.img}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td className={classes.name}>{product?.title}</td>
                  <td className={classes.extra}>
                    {product?.extraOptions.map((extra) => `${extra.text}, `)}
                  </td>
                  <td className={classes.price}>{product?.unitPrice}</td>
                  <td className={classes.quantity}>X{product?.quantity}</td>
                  <td className={classes.total}>
                    {product?.totalCartItemPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={classes.cartTotal}>
          <h1>CART TOTAL</h1>
          <div>
            <p>
              <span>Subtotal</span>
              <span>${totalCartPrice}</span>
            </p>
            <p>
              <span>Discount:</span>
              <span>$0.00</span>
            </p>
            <hr />
            <p>
              <span>Total:</span>
              <span>${totalCartPrice}</span>
            </p>
          </div>
          <button onClick={checkoutHandler} disabled={cartItems.length === 0}>
            CHECKOUT NOW
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
