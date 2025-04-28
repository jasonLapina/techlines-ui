import { Stack, Switch, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleFavorites } from "../redux/slices/productSlice.ts";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  // Local state to track the checked state of the Switch
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked((prev) => !prev);
    dispatch(toggleFavorites());
  };

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
      <Tooltip
        arrow
        placement="top"
        title={isChecked ? "Show All" : "Show Favorites"}
      >
        <Switch checked={isChecked} onChange={handleSwitchChange} />
      </Tooltip>
    </Stack>
  );
};

export default Header;
