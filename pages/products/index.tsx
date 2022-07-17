import { Container } from '@mantine/core';
import { GetServerSideProps } from 'next';
import PizzaList from '../../components/PizzaList';
import Product, { IProduct } from '../../models/Product';

const Products = ({ products, error }) => {
  if (error) return error.message;
  return (
    <Container size="xl">
      <PizzaList products={products} />
    </Container>
  );
};
export default Products;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
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
