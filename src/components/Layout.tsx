import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "./Header.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",

          px: 2,
          pb: 10,
          py: 4,
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
