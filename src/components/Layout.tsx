import Header from "./Header.tsx";
import { Outlet } from "react-router";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 10px",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
