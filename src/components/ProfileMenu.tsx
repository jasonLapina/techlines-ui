import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { Person } from "@mui/icons-material";

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
      credentials: "include",
    }).then(() => (window.location.href = "/"));
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Person sx={{ color: "white" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <AccountDialog />
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const AccountDialog = () => {
  return (
    <>
      <MenuItem>My account</MenuItem>
    </>
  );
};
