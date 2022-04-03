import Footer from "./Footer";
import Navbar from "./Navbar";
import Header from "./Header";
import { Container } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

const Layout = ({ children, theme }) => {
  return (
    <MantineProvider
      defaultProps={{
        Container: {
          sizes: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
          },
        },
      }}
    >
      <Header>
        <Container size="xl">
          <Navbar color={theme} />
        </Container>
      </Header>
      {children}
      <Footer />
    </MantineProvider>
  );
};

export default Layout;
