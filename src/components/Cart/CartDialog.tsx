import CartIcon from "./CartIcon.tsx";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { clearCart } from "../../redux/slices/cartSlice.ts";

const CartDialog = () => {
  const [open, setOpen] = useState(false);

  const { cart } = useSelector((state: RootState) => state);
  const { items } = cart;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    setOpen(false);
  };

  const hasItems = useMemo(() => items?.length > 0, [items]);

  return (
    <>
      <CartIcon onClick={() => setOpen(true)} />
      <Dialog
        fullWidth
        maxWidth={hasItems ? "xl" : "sm"}
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
        >
          {!hasItems && (
            <Typography
              sx={{
                textAlign: "center",
                mt: 10,
              }}
              variant="h5"
            >
              Your cart is empty. 😭
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          {hasItems && (
            <>
              <Button onClick={handleClearCart} variant="text" color="error">
                Clear Cart
              </Button>
              <Button variant="contained" size="large">
                Checkout
              </Button>
            </>
          )}
          {!hasItems && <Button onClick={() => setOpen(false)}>Close</Button>}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartDialog;
