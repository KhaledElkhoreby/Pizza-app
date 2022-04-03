import Image from "next/image";
import { Badge } from "@mantine/core";

import charImage from "../public/images/cart.png";
import phone from "../public/images/telephone.png";
import logo from "../public/images/logo.png";

import classes from "../styles/Navbar.module.scss";

const Navbar = ({ color }) => {
  return (
    <ul className={classes.container}>
      <li className={classes.phone}>
        <div>
          <Image
            src={phone}
            alt="phone"
            width={30}
            height={30}
            objectFit="contain"
          />
        </div>
        <div>
          <p>ORDER NOW!</p>
          <p>010 071 131</p>
        </div>
      </li>
      <li className={classes.mainNav}>
        <ul>
          <li>Homepage</li>
          <li>Products</li>
          <li>Menu</li>
          <li>
            <Image
              src={logo}
              alt="Logo"
              width={160}
              height={69}
              objectFit="contain"
            />
          </li>
          <li>Events</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </li>
      <li className={classes.cart}>
        <Image alt="cart" src={charImage} width={30} height={30} />
        <Badge
          sx={{
            padding: ".4em",
            fontSize: ".9rem",
            color: `${color.primaryColor}`,
            backgroundColor: "#fff",
            position: "absolute",
            top: "25px",
            right: "-2px",
          }}
        >
          0
        </Badge>
      </li>
    </ul>
  );
};

export default Navbar;
