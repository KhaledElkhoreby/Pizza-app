import Image from 'next/image';
import { Container } from '@mantine/core';
import myLoader from '../../helper/myLoader';
import classes from '../../styles/Order.module.scss';

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return classes.done;
    if (index - status === 1) return classes.inProgress;
    if (index - status > 1) return classes.undone;
  };
  return (
    <Container size="xl">
      <div className={classes.container}>
        <div className={classes.left}>
          <div className={classes.orderDetails}>
            <div className={classes.table}>
              <table>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Address</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={classes.name}>12345678996325</td>
                    <td className={classes.extra}>Khaled</td>
                    <td className={classes.price}>Mansoura st. 215-112</td>
                    <td className={classes.quantity}>$79.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={classes.tracking}>
            <div className={statusClass(0)}>
              <div>
                <Image
                  alt="payment"
                  loader={myLoader}
                  src={'paid.png'}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
              <p>Payment</p>
              <div>
                <Image
                  alt="checked"
                  loader={myLoader}
                  src={'checked.png'}
                  width={30}
                  height={30}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={statusClass(1)}>
              <div>
                <Image
                  alt="preparing"
                  loader={myLoader}
                  src={'bake.png'}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
              <p>Preparing</p>
              <div>
                <Image
                  alt="checked"
                  loader={myLoader}
                  src={'checked.png'}
                  width={30}
                  height={30}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={statusClass(2)}>
              <div>
                <Image
                  alt="on the way"
                  loader={myLoader}
                  src={'bike.png'}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
              <p>On the way</p>
              <div>
                <Image
                  alt="checked"
                  loader={myLoader}
                  src={'checked.png'}
                  width={30}
                  height={30}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className={statusClass(3)}>
              <div>
                <Image
                  alt="delivered"
                  loader={myLoader}
                  src={'delivered.png'}
                  width={50}
                  height={50}
                  objectFit="contain"
                />
              </div>
              <p>Delivered</p>
              <div>
                <Image
                  alt="checked"
                  loader={myLoader}
                  src={'checked.png'}
                  width={30}
                  height={30}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
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
            <button disabled>PAID</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Order;
