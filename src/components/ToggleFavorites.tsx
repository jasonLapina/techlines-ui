import { Switch, Tooltip } from "@mui/material";
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
    <Tooltip
      arrow
      placement="top"
      title={isChecked ? "Show All" : "Show Favorites"}
    >
      <Switch checked={isChecked} onChange={handleSwitchChange} />
    </Tooltip>
  );
};

export default ToggleFavorites;
