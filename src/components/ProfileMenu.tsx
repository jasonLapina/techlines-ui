import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { User } from "../types.ts";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router";
import ProfileDialog from "./ProfileDialog";

export default function ProfileMenu() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
      credentials: "include",
    }).then(() => (window.location.href = "/"));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleProfileClick = () => {
    setDialogOpen(true);
    handleClose();
  };

  const handleOrderHistoryClick = () => {
    navigate("/order-history");
    handleClose();
  };

  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  const { name, googleImage } = userInfo as unknown as User;

  const AVATAR_SIZE = 32;

  return (
    <>
      <Tooltip title="Account settings" arrow>
        <Avatar
          slotProps={{
            img: {
              referrerPolicy: "no-referrer",
            },
          }}
          sx={{
            cursor: "pointer",
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            ml: 1,
          }}
          onClick={handleClick}
          src={googleImage}
          alt={name}
        />
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleOrderHistoryClick}>
          <ListItemIcon>
            <HistoryIcon fontSize="small" />
          </ListItemIcon>
          Order history
        </MenuItem>
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <ProfileDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        userInfo={userInfo}
      />
    </>
  );
}
