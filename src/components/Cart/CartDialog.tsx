import CartIcon from "./CartIcon.tsx";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";

const CartDialog = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { cart } = useSelector((state: RootState) => state);
  const { items } = cart;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (items.length === 0) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    } else {
      setOpen(true);
    }
  };

  const anchorOpen = Boolean(anchorEl);
  const id = anchorOpen ? "simple-popper" : undefined;

  useEffect(() => {
    const handleScroll = () => {
      if (anchorEl) setAnchorEl(null);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [anchorEl]);

  return (
    <>
      <CartIcon id={id} onClick={handleClick} />
      <Popper
        sx={{
          zIndex: "modal",
        }}
        id={id}
        open={anchorOpen}
        anchorEl={anchorEl}
      >
        <Paper
          sx={{
            py: 1,
            px: 2,
            bgcolor: "secondary.light",
            color: "white",
            borderRadius: "4px",
          }}
        >
          Your Cart is Empty
        </Paper>
      </Popper>
      <Dialog
        fullWidth
        maxWidth={"xl"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>
          <Typography variant="h6">Your Shopping Cart</Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            minHeight: "50vh",
          }}
        ></DialogContent>
        <DialogActions>
          <Button variant="text" color="error">
            Clear Cart
          </Button>
          <Button variant="contained" size="large">
            Checkout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartDialog;
