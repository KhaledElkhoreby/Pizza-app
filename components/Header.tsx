import classes from '../styles/Header.module.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const Header = ({ children }) => {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        ref.current.style.cssText =
          'box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75)';
      } else {
        ref.current.style.boxShadow = 'none';
      }
    };

    window.onscroll = () => {
      scrollFunction();
    };
  });

  return (
    <header ref={ref} className={classes.header}>
      {children}
    </header>
  );
};

export default Header;
