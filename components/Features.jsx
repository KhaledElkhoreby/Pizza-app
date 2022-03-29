import Image from "next/image";
import { useState } from "react";

import arrow1 from "../public/images/arrowl.png";
import arrow from "../public/images/arrowr.png";

import classes from "../styles/Features.module.scss";

const myLoader = ({ src }) => {
  return `/images/${src}`;
};
const Features = () => {
  const [index, setIndex] = useState(0);
  const images = ["featured.png", "featured2.png", "featured3.png"];
  const arrowHandler = (dir) => {
    if (dir === "l") setIndex(index !== 0 ? index - 1 : 2);
    if (dir === "r") setIndex(index !== 2 ? index + 1 : 0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.arrowContainer} onClick={() => arrowHandler("l")}>
        <Image src={arrow1} alt="" layout="fill" objectFit="contain" />
      </div>
      <div
        className={classes.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={classes.imgContainer} key={i}>
            <Image
              loader={myLoader}
              src={img}
              alt=""
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        ))}
      </div>
      <div className={classes.arrowContainer} onClick={() => arrowHandler("r")}>
        <Image src={arrow} alt="" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Features;
