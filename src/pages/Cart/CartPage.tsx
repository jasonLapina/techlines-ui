import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Box, Stack } from "@mui/material";
import CartItem from "./CartItem.tsx";
import { CartItem as CartItemType } from "../../types.ts";
import OrderSummary from "./OrderSummary.tsx";

const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state);

  if (cart.items.length === 0) return <p>Your cart is empty</p>;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "start",
        columnGap: 5,
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Stack useFlexGap gap={3}>
        {cart.items.map((item: CartItemType) => (
          <CartItem item={item} key={item.product._id} />
        ))}
      </Stack>
      <OrderSummary />
    </Box>
  );
};

export default CartPage;
