import { NextApiRequest, NextApiResponse } from 'next';
import { buffer } from 'micro';
import stripe from '../../lib/stripeConnection';
import Stripe from 'stripe';

export const config = {
  api: {
    bodyParser: false,
  },
};
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const buf = await buffer(req);
    const sig = req.headers['stripe-signature'];
    let event: Stripe.Event;
    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
      // console.log({ event });
    } catch (error) {
      console.error(`Webhook error: ${error.message}`);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    // handler the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`successfull ✅ => ${event.type}`);
        break;
      case 'payment_intent.created':
        const paymentCreated = event.data.object;
        console.log(`successfull ✅ => ${event.type}`);
        break;
      case 'payment_method.attached':
        const paymentMethod = event.data.object;
        console.log(`successfull ✅ => ${event.type}`);
        break;

      default:
        console.log(`Unhandled event type ⚠️  => ${event.type} `);
    }

    return res.status(200).json({ received: true });
  } else {
    console.error(`${req.method} method not allowed for this ${req.url}`);
    res
      .status(404)
      .json(`${req.method} method not allowed for this ${req.url}`);
  }
}
