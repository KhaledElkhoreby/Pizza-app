import PizzaCard from './PizzaCard';

import classes from '../styles/PizzaList.module.scss';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/dist/client/router';

const PizzaList = ({ products: PizzaList }) => {
  const router = useRouter();
  console.log('PizzaList: ', PizzaList);
  console.log(router);

  return (
    <div className={classes.container}>
      {router.route !== '/products' && (
        <>
          <h1 className={classes.title}>THE BEST PIZZA IN TOWN</h1>
          <p className={classes.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            maxime repudiandae nobis odio quasi id quos molestias modi qui
            excepturi esse, praesentium pariatur molestiae ea aliquid magni
            reprehenderit, repellat natus?
          </p>
        </>
      )}
      <div className={classes.wrapper}>
        {PizzaList?.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
