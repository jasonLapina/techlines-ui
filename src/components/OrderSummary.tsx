import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { CartItem, Product } from "../types.ts";
import { Link } from "react-router";
import { Google } from "@mui/icons-material";

const multiplyPriceByQuantity = (price: number, quantity: number) => {
  return price * quantity;
};

interface OrderSummaryProps {
  onNavigate: () => void;
}

const OrderSummary = ({ onNavigate }: OrderSummaryProps) => {
  const { cart, user } = useSelector((state: RootState) => state);

  const subTotal = cart.items.reduce((acc: number, item: CartItem) => {
    const { price } = item.product;
    const { quantity } = item;
    return acc + multiplyPriceByQuantity(price, quantity);
  }, 0);

  return (
    <Paper
      sx={{
        width: "100%",
        px: 2,
        py: 4,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} textAlign="center">
        Order Summary
      </Typography>
      <Stack
        sx={{ mt: 2, maxHeight: "25vh", overflowY: "auto", pr: 1 }}
        useFlexGap
        gap={2}
      >
        {cart.items.map((item: CartItem) => (
          <OrderItem item={item} key={item.product._id} />
        ))}
      </Stack>

      {/*TOTALS*/}

      <Stack useFlexGap gap={1} sx={{ mt: 4 }}>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Subtotal:</Typography>
          <Typography>${subTotal}</Typography>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography fontWeight="bold">Shipping:</Typography>
          <Typography>$5</Typography>
        </Stack>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: "solid 1px #00000020",
            pb: 1,
          }}
        >
          <Typography sx={{ mt: 2 }} variant="h5">
            Grand Total:
          </Typography>
          <Typography variant="h5">${subTotal + 5}</Typography>
        </Stack>
      </Stack>
      {!user?.userInfo && (
        <Button
          endIcon={<Google />}
          onClick={() =>
            (window.location.href = `${import.meta.env.VITE_API_URL}/users/auth/google`)
          }
          fullWidth
          variant="contained"
          sx={{ mt: 4, backgroundColor: "info.main" }}
        >
          Sign in to Checkout
        </Button>
      )}
      {user?.userInfo && (
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 4 }}
          component={Link}
          to="/checkout"
          onClick={onNavigate}
        >
          Checkout
        </Button>
      )}
      <Stack
        sx={{ mt: 2 }}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <Typography>or</Typography>
        <Button
          component={Link}
          to={"/products"}
          sx={{ textTransform: "none" }}
          variant="text"
          onClick={onNavigate}
        >
          continue shopping
        </Button>
      </Stack>
    </Paper>
  );
};

interface OrderItemProps {
  item: {
    product: Product;
    quantity: number;
  };
}
const OrderItem = ({ item }: OrderItemProps) => {
  const { product, quantity } = item;
  const { name, price } = product;
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack flexDirection="row" useFlexGap gap={1} alignItems="center">
        <Typography fontWeight="bold">{name}</Typography>
        <Divider orientation="vertical" flexItem />
        <Typography color={"info"} sx={{ opacity: 0.5 }}>
          ${price} x {quantity}
        </Typography>
      </Stack>

      <Typography color="info">
        ${multiplyPriceByQuantity(price, quantity)}
      </Typography>
    </Stack>
  );
};

export default OrderSummary;
