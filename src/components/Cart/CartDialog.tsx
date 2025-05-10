import CartIcon from "./CartIcon.tsx";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { clearCart } from "../../redux/slices/cartSlice.ts";
import { CartItem as CartItemType } from "../../types.ts";
import CartItem from "../CartItem.tsx";
import OrderSummary from "../OrderSummary.tsx";

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
            overflowY: "hidden",
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

          {hasItems && <CartDialogContent items={items} />}
        </DialogContent>
        <DialogActions>
          {hasItems && (
            <Button onClick={handleClearCart} variant="text" color="error">
              Clear Cart
            </Button>
          )}
          {!hasItems && <Button onClick={() => setOpen(false)}>Close</Button>}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CartDialog;

const CartDialogContent = ({ items }: { items: CartItemType[] }) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr .8fr"
      alignItems="start"
      justifyContent="center"
      justifyItems="center"
      columnGap={2}
      py={5}
    >
      <Stack
        sx={{ maxHeight: "64vh", overflowY: "auto", pr: 1 }}
        useFlexGap
        gap={1}
      >
        {items.map((item: CartItemType) => (
          <CartItem item={item} key={item.product._id} />
        ))}
      </Stack>
      <OrderSummary />
    </Box>
  );
};
