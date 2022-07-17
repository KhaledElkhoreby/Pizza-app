import { Container } from '@mantine/core';
import Head from 'next/head';
import Features from '../components/Features';
import PizzaList from '../components/PizzaList';
import dbConnect from '../lib/dbConnect';
import Product, { IProduct } from '../models/Product';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';

export default function Home({ products, error }) {
  console.log('products: ', products);
  if (error) return error.message;
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  console.log(stripePromise);
  return (
    <div>
      <Head>
        <title>Pizza</title>
        <meta name="description" content="Pizza restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Features />
      <Container size="xl">
        <PizzaList products={products} />
      </Container>
    </div>
  );
}

export const getServerSideProps = async () => {
  try {
    await dbConnect();
    const results = await Product.find();
    const products = (await JSON.parse(JSON.stringify(results))) as IProduct[];
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        error,
      },
    };
  }
};
