import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { User } from "../types.ts";

export default function ProfileDialog() {
  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/users/logout`, {
      credentials: "include",
    }).then(() => (window.location.href = "/"));
  };
  const [open, setOpen] = useState(false);

  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  const { name, email, googleImage } = userInfo as unknown as User;

  return (
    <>
      <Tooltip title="My account" arrow>
        <Avatar
          sx={{ cursor: "pointer", width: 32, height: 32 }}
          onClick={() => setOpen(true)}
          src={googleImage}
          alt={name}
        />
      </Tooltip>
      <Dialog
        maxWidth="sm"
        fullWidth
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>My account</DialogTitle>
        <DialogContent>
          <Stack useFlexGap gap={3} alignContent="center" alignItems="center">
            <Box
              component="img"
              src={googleImage}
              alt={name}
              sx={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
            <Typography>
              <strong>Name:</strong> {name}
            </Typography>
            <Typography>
              <strong>Email:</strong> {email}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} variant="text">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
