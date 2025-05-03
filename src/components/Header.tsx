import { Badge, Box, Stack, Tooltip } from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import { useLocation } from "react-router";
import { ShoppingCart } from "@mui/icons-material";
import Logo from "./Logo.tsx";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { CartItem } from "../types.ts";
import Link from "./Link.tsx";

const Header = () => {
  const location = useLocation();

  return (
    <Stack
      sx={{
        height: "80px",
        px: 6,
        py: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "primary.light",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
      component="header"
    >
      <Stack direction="row" useFlexGap gap={4} alignItems="center">
        <Logo />
        <ShoppingCartIcon />
      </Stack>
      <Box>{location.pathname === "/" && <ToggleFavorites />}</Box>
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
        >
          <ShoppingCart
            sx={{
              fontSize: "2rem",
            }}
          />
        </Badge>
      </Link>
    </Tooltip>
  );
};

export default Header;
