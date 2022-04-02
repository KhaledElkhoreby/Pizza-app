import Image from "next/image";
import Link from "next/link";

import myLoader from "../helper/myLoader";
import classes from "../styles/PizzaCard.module.scss";
const PizzaCard = ({ pizza }) => {
  console.log("pizza", pizza);
  return (
    <Link href={`/products/${pizza._id}`} passHref>
      <div className={classes.container}>
        <Image
          loader={myLoader}
          src={pizza?.img}
          alt=""
          width="500"
          height="500"
        />
        <h1 className={classes.title}>{pizza?.title}</h1>
        <span className={classes.price}>${pizza?.prices[0]}</span>
        <p className={classes.desc}>{pizza?.desc}</p>
      </div>
    </Link>
  );
};

export default PizzaCard;
