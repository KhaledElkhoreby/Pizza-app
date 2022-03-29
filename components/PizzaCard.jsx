import Image from "next/image";

import pizzaImage from "../public/images/pizza.png";
import classes from "../styles/PizzaCard.module.scss";
const PizzaCard = () => {
  return (
    <div className={classes.container}>
      <Image src={pizzaImage} alt="" width="500" height="500" />
      <h1 className={classes.title}>FIORI DI ZUCCA</h1>
      <span className={classes.price}>$19.00</span>
      <p className={classes.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        autem?
      </p>
    </div>
  );
};

export default PizzaCard;
