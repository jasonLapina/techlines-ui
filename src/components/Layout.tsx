import { Outlet } from "react-router";
import { Box } from "@mui/material";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import useUser from "../hooks/useUser.ts";
import { setUser } from "../redux/slices/userSlice.ts";

const Layout = () => {
  const dispatch = useDispatch();

  const { data } = useUser();

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    } else {
      dispatch(setUser(null));
    }
  }, [data, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          maxWidth: "1400px",
          width: "100%",
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
