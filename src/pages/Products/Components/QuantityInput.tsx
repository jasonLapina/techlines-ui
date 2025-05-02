import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeOneFromCart,
  removeProductFromCart,
} from "../../../redux/slices/cartSlice.ts";
import { Product } from "../../../types.ts";

interface QuantityInputProps {
  initValue?: number;
  canRemove?: boolean;
  canAdd?: boolean;
  product?: Product;
  onIncrement?: (quantity: number) => void;
}

const QuantityInput = ({
  initValue,
  canRemove,
  canAdd,
  product,
  onIncrement,
}: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(initValue ?? 1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (canAdd) {
      dispatch(addToCart({ product }));
    } else if (onIncrement) {
      onIncrement(newQuantity);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(removeOneFromCart(product));
    } else if (!canRemove && quantity === 1) {
      return;
    } else {
      dispatch(removeProductFromCart(product));
    }
  };

  return (
    <Box
      sx={{
        border: (theme) => `solid 1px ${theme.palette.divider}`,
        p: 1,
        width: "fit-content",
        mt: 1,
      }}
    >
      <Stack alignItems="center" direction="row" useFlexGap gap={2}>
        <QtyButton
          quantity={quantity}
          canRemove={canRemove}
          onClick={handleDecrement}
        />
        <Typography sx={{ pointerEvents: "none" }}>{quantity}</Typography>
        <QtyButton onClick={handleIncrement} increment />
      </Stack>
    </Box>
  );
};

interface QtyButtonProps {
  increment?: boolean;
  onClick: () => void;
  canRemove?: boolean;
  quantity?: number;
}
const QtyButton = ({
  increment = false,
  onClick,
  canRemove,
  quantity,
}: QtyButtonProps) => {
  return (
    <IconButton onClick={onClick}>
      {increment ? (
        <Add
          sx={{
            color: "primary.light",
          }}
        />
      ) : canRemove && quantity && quantity === 1 ? (
        <Delete color="error" />
      ) : (
        <Remove
          sx={{
            color: "error.light",
          }}
        />
      )}
    </IconButton>
  );
};

export default QuantityInput;
