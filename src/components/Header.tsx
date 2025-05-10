import { AppBar, Box, Button, Container, Stack, Toolbar } from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import Logo from "./Logo.tsx";
import Link from "./Link.tsx";
import { useLocation } from "react-router";
import CartDialog from "./Cart/CartDialog.tsx";
import ProfileMenu from "./ProfileMenu.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";

const Header = () => {
  const { pathname } = useLocation();
  const { userInfo } = useSelector((state: RootState) => state.user);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "primary.main",
        boxShadow: 3,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "80px" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack direction="row" spacing={4} alignItems="center">
              <Logo color="white" />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <NavLinks />
              </Box>
            </Stack>

            <Stack direction="row" alignItems="center" useFlexGap gap={4}>
              {pathname === "/products" && <ToggleFavorites />}
              {userInfo && <ProfileMenu />}
              <CartDialog />
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={Link}
        to="/products"
        variant="text"
        sx={{
          color: "white",
          fontWeight: 500,
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
      >
        Products
      </Button>
    </Stack>
  );
};

export default Header;
