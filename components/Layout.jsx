import { ThemeProvider, createTheme } from "@mui/material/styles";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      light: "#da664a",
      main: "#d1401d",
      dark: "#922c14",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffee33",
      main: "#ffea00",
      dark: "#b2a300",
      contrastText: "#000",
    },
    badge: {
      light: "#ff7961",
      main: "#fff",
      dark: "#ba000d",
      contrastText: "#d1401d",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Navbar />
      </Header>
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
