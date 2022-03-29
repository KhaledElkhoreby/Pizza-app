import Image from "next/image";
import Container from "@mui/material/Container";
import Badge from "@mui/material/Badge";

import charImage from "../public/images/cart.png";
import phone from "../public/images/telephone.png";
import logo from "../public/images/logo.png";

import classes from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <Container maxWidth="xl">
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
          <Badge color="badge" badgeContent={0} showZero>
            <Image alt="cart" src={charImage} width={30} height={30} />
          </Badge>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
