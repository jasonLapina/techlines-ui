import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import Logo from "./Logo.tsx";
import Link from "./Link.tsx";
import { useLocation } from "react-router";
import CartDialog from "./Cart/CartDialog.tsx";
import ProfileDialog from "./ProfileDialog.tsx";
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
        <Toolbar>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr 1fr",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{ justifySelf: "start" }}>
              <Logo />
            </Box>
            <Box sx={{ justifySelf: "center" }}>
              <NavLinks />
            </Box>
            <Stack
              sx={{
                justifySelf: "end",
              }}
              direction="row"
              alignItems="center"
              useFlexGap
              gap={2}
            >
              {pathname === "/products" && <ToggleFavorites />}
              <CartDialog />
              {userInfo && <ProfileDialog />}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const NavLinks = () => {
  const links = [
    {
      text: "Products",
      path: "/products",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Stack direction="row" spacing={5}>
      {links.map((link) => (
        <Link key={link.text} to={link.path}>
          {link.text}
        </Link>
      ))}
    </Stack>
  );
};

export default Header;
