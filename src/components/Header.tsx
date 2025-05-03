import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import { ShoppingCart } from "@mui/icons-material";
import Logo from "./Logo.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { CartItem } from "../types.ts";
import Link from "./Link.tsx";

const Header = () => {
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

            <Stack direction="row" alignItems="center" spacing={2}>
              <ToggleFavorites />
              <ShoppingCartIcon />
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

const ShoppingCartIcon = () => {
  const { items } = useSelector((state: RootState) => state.cart);

  const badgeContent = items.reduce((acc: number, item: CartItem) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Tooltip title="Shopping Cart" placement="bottom" arrow>
      <Link to="/cart">
        <Badge
          showZero
          badgeContent={badgeContent}
          color="error"
          overlap="circular"
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "secondary.light",
              color: "white",
              fontWeight: "bold",
            },
          }}
        >
          <ShoppingCart
            sx={{
              fontSize: "1.8rem",
              color: "white",
              transition: "transform 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />
        </Badge>
      </Link>
    </Tooltip>
  );
};

export default Header;
