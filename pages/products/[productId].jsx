import Image from "next/image";
import Container from "@mui/material/Container";

import myLoader from "../../helper/myLoader";
import imageSize from "../../public/images/size.png";

import classes from "../../styles/Product.module.scss";

const pizza = {
  src: "pizza.png",
  title: "Campagnola",
  price: 23.9,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum ratione tenetur saepe ipsa explicabo, corporis eius reprehenderit maxime inventore accusantium.",
};

const Product = () => {
  return (
    <Container maxWidth="xl">
      <div className={classes.container}>
        <div className={classes.image}>
          <Image
            loader={myLoader}
            src={pizza.src}
            alt="pizza"
            width={500}
            height={500}
            priority
            objectFit="content"
          />
        </div>
        <div className={classes.details}>
          <h1 className={classes.title}>{pizza.title}</h1>
          <h3 className={classes.price}>${pizza.price}</h3>
          <p className={classes.desc}>{pizza.description}</p>
          <form>
            <h3 className={classes.supTitle}>Choose the size</h3>
            <div className={classes.sizes}>
              <div className={classes.small}>
                <Image
                  src={imageSize}
                  alt="small size"
                  objectFit="content"
                  height={45}
                  width={45}
                />
                <div>Small</div>
              </div>
              <div className={classes.medium}>
                <Image
                  src={imageSize}
                  alt="medium size"
                  objectFit="content"
                  height={60}
                  width={60}
                />
                <div>Medium</div>
              </div>
              <div className={classes.large}>
                <Image
                  src={imageSize}
                  alt="large size"
                  objectFit="content"
                  height={75}
                  width={75}
                />
                <div>Large</div>
              </div>
            </div>
            <h3 className={classes.supTitle}>Choose additional ingredients</h3>
            <div className={classes.ingredients}>
              <label htmlFor="double">
                <input type="checkbox" name="double ingredients" id="double" />
                Double Ingredients
              </label>
              <label htmlFor="extra">
                <input type="checkbox" name="extra cheese" id="extra" />
                Extra Cheese
              </label>
              <label htmlFor="spicy">
                <input type="checkbox" name="double ingredients" id="spicy" />
                Spicy Sauce
              </label>
              <label htmlFor="garlic">
                <input type="checkbox" name="garlic sauce" id="garlic" />
                garlic sauce
              </label>
            </div>
            <div className={classes.submit}>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min={0}
                step={1}
                defaultValue={1}
                // value={1}
              />
              <button type="submit">Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Product;
