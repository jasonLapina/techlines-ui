import { CartItem as CartItemType } from "../../types.ts";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  return <>cart item</>;
};

export default CartItem;
