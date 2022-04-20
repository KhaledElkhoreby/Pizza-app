import { Container } from "@mantine/core";
import axios from "axios";
import Head from "next/head";
import Features from "../components/Features";
import PizzaList from "../components/PizzaList";

export default function Home({ products }) {
  console.log("products: ", products);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Features />
      <Container size='xl'>
        <PizzaList products={products} />
      </Container>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data: products } = await axios.get("/api/products");
  console.log(products);
  return {
    props: {
      products,
    },
  };
};
