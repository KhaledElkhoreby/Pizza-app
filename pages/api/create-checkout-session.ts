import { NextApiRequest, NextApiResponse } from 'next';
import stripe from '../../lib/stripeConnection';
import { ICartItem } from '../../redux/cartSlice';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const cartItems = req.body.cartItems as ICartItem[];
    const line_items = cartItems?.map((cartItem) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: cartItem.title,
          description: `${cartItem.desc} 
          ${cartItem?.extraOptions?.map((extra) => extra.text).join(', ')}`,
          metadata: { _id: cartItem._id },
          images: ['https://pizza-app-gamma.vercel.app/images/pizza.png'],
        },
        unit_amount: cartItem.unitPrice * 100,
      },
      quantity: cartItem.quantity,
    }));
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'sdf',
                description: '',
                images: ['df'],
                metadata: {},
              },
              unit_amount: 56,
            },
            quantity: 5,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/`,
        cancel_url: `${req.headers.origin}/${
          cartItems.length > 1 ? 'cart' : `products/${cartItems[0]._id}`
        }`,
        customer_email: 'elkhorebykhaled@gmail.com',
      });
      res.status(200).json({ url: session.url });
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
