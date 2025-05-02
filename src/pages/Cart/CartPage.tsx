import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { Stack } from "@mui/material";
import CartItem from "./CartItem.tsx";
import { CartItem as CartItemType } from "../../types.ts";

const CartPage = () => {
  const { cart } = useSelector((state: RootState) => state);

  if (cart.items.length === 0) return <p>Your cart is empty</p>;

  return (
    <Stack>
      {cart.items.map((item: CartItemType) => (
        <CartItem item={item} key={item.product._id} />
      ))}
    </Stack>
  );
};

export default CartPage;
