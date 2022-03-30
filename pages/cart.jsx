import Image from "next/image";
import Container from "@mui/material/Container";

import myLoader from "./../helper/myLoader";

import classes from "../styles/Cart.module.scss";

const cartItems = {
  src: "pizza.png",
  Name: "CORALZO",
  Extras: "Double ingredient spicy sauce",
  price: 20.0,
  quantity: 2,
  total: 40,
};
const Cart = () => {
  return (
    <Container maxWidth="xl">
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
              <tr>
                <td className={classes.imgContainer}>
                  <Image
                    alt=""
                    loader={myLoader}
                    src={cartItems.src}
                    width={100}
                    height={100}
                  />
                </td>
                <td className={classes.name}>{cartItems.Name}</td>
                <td className={classes.extra}>{cartItems.Extras}</td>
                <td className={classes.price}>{cartItems.price}</td>
                <td className={classes.quantity}>{cartItems.quantity}</td>
                <td className={classes.total}>{cartItems.total}</td>
              </tr>
              <tr>
                <td className={classes.imgContainer}>
                  <Image
                    alt=""
                    loader={myLoader}
                    src={cartItems.src}
                    width={100}
                    height={100}
                  />
                </td>
                <td className={classes.name}>{cartItems.Name}</td>
                <td className={classes.extra}>{cartItems.Extras}</td>
                <td className={classes.price}>{cartItems.price}</td>
                <td className={classes.quantity}>{cartItems.quantity}</td>
                <td className={classes.total}>{cartItems.total}</td>
              </tr>
              <tr>
                <td className={classes.imgContainer}>
                  <Image
                    alt=""
                    loader={myLoader}
                    src={cartItems.src}
                    width={100}
                    height={100}
                  />
                </td>
                <td className={classes.name}>{cartItems.Name}</td>
                <td className={classes.extra}>{cartItems.Extras}</td>
                <td className={classes.price}>{cartItems.price}</td>
                <td className={classes.quantity}>{cartItems.quantity}</td>
                <td className={classes.total}>{cartItems.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.cartTotal}>
          <h1>CART TOTAL</h1>
          <div>
            <p>
              <span>Subtotal</span>
              <span>$79.60</span>
            </p>
            <p>
              <span>Discount:</span>
              <span>$0.00</span>
            </p>
            <hr />
            <p>
              <span>Total:</span>
              <span>$79.60</span>
            </p>
          </div>
          <button>CHECKOUT NOW</button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
