import { useTheme } from "@emotion/react";
const Header = ({ children }) => {
  const { main } = useTheme()?.palette?.primary;

  return <header style={{ backgroundColor: main }}>{children}</header>;
};

export default Header;
