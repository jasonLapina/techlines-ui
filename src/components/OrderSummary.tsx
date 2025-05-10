import { Button, Divider, Paper, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.ts";
import { CartItem, Product } from "../types.ts";
import { Link } from "react-router";

const multiplyPriceByQuantity = (price: number, quantity: number) => {
  return price * quantity;
};

const OrderSummary = () => {
  const cart = useSelector((state: RootState) => state.cart);

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
      <Button 
        fullWidth 
        variant="contained" 
        sx={{ mt: 4 }}
        component={Link}
        to="/checkout"
      >
        Checkout
      </Button>
      <Stack
        sx={{ mt: 2 }}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
      >
        <Typography>or</Typography>
        <Button
          component={Link}
          to={"/"}
          sx={{ textTransform: "none" }}
          variant="text"
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
