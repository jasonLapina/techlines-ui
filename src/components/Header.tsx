import { Box, IconButton, Stack } from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import { Link, useLocation } from "react-router";
import { ShoppingCart } from "@mui/icons-material";

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
      }}
      component="header"
    >
      <Stack direction="row" useFlexGap gap={2} alignItems="center">
        <Link to={"/"}>UWE</Link>
        <IconButton component={Link} to="/cart">
          <ShoppingCart
            sx={{
              fontSize: "2rem",
            }}
          />
        </IconButton>
      </Stack>
      <Box>{location.pathname === "/" && <ToggleFavorites />}</Box>
    </Stack>
  );
};

export default Header;
