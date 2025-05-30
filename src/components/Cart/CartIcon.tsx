import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { CartItem } from "../../types.ts";

const CartIcon = ({
  onClick,
}: {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { items } = useSelector((state: RootState) => state.cart);

  const badgeContent = items.reduce((acc: number, item: CartItem) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Badge
      onClick={(e) => onClick(e)}
      showZero
      badgeContent={badgeContent}
      color="error"
      overlap="circular"
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: "secondary.light",
          color: "white",
          fontWeight: "bold",
        },
        cursor: "pointer",
      }}
    >
      <ShoppingCart
        sx={{
          color: "white",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      />
    </Badge>
  );
};

export default CartIcon;
