import { Stack } from "@mui/material";
import ToggleFavorites from "./ToggleFavorites.tsx";
import { useLocation } from "react-router";

const Header = () => {
  const location = useLocation();

  return (
    <Stack
      sx={{
        height: "80px",
        p: 3,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      component="header"
    >
      {location.pathname === "/" && <ToggleFavorites />}
    </Stack>
  );
};

export default Header;
