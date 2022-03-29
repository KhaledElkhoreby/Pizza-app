import PizzaCard from "./PizzaCard";

import classes from "../styles/PizzaList.module.scss";

const PizzaList = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={classes.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        maxime repudiandae nobis odio quasi id quos molestias modi qui excepturi
        esse, praesentium pariatur molestiae ea aliquid magni reprehenderit,
        repellat natus?
      </p>
      <div className={classes.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
