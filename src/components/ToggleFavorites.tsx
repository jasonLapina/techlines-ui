import { Box, Switch, Tooltip } from "@mui/material";
import { useState } from "react";
import { toggleFavorites } from "../redux/slices/productSlice.ts";
import { useDispatch } from "react-redux";

const ToggleFavorites = () => {
  const [isChecked, setIsChecked] = useState(
    JSON.parse(localStorage.getItem("favoritesToggled") ?? "false"),
  );

  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    setIsChecked((prev: boolean) => !prev);
    dispatch(toggleFavorites());
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Tooltip
        arrow
        placement="bottom"
        title={isChecked ? "Show All Products" : "Show Only Favorites"}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Switch
            checked={isChecked}
            onChange={handleSwitchChange}
            size="small"
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              },
              "& .MuiSwitch-track": {
                backgroundColor: "secondary.main",
              },
              "& .MuiSwitch-thumb": {
                backgroundColor: "white",
              },
            }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default ToggleFavorites;
