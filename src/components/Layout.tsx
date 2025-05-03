import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          px: 2,
          pb: 10,
          py: 4,
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
