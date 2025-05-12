import {
  Avatar,
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
          slotProps={{
            img: {
              referrerPolicy: "no-referrer",
            },
          }}
          sx={{ cursor: "pointer", width: 40, height: 40, ml: 2 }}
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
          <Stack
            useFlexGap
            gap={2}
            sx={{ mb: 5, mt: 2 }}
            alignContent="center"
            alignItems="start"
          >
            <Avatar
              sx={{ width: 120, height: 120, mb: 2, alignSelf: "center" }}
              onClick={() => setOpen(true)}
              src={googleImage}
              alt={name}
              slotProps={{
                img: {
                  referrerPolicy: "no-referrer",
                },
              }}
            />
            <Typography variant="h5">
              <strong>Name:</strong> {name}
            </Typography>
            <Typography variant="h5">
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
