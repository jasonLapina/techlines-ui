import { CartItem as CartItemType } from "../types.ts";
import { Box, Paper, Stack, Typography } from "@mui/material";
import QuantityInput from "../pages/Products/Components/QuantityInput.tsx";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { product, quantity } = item;
  const { images, name, price } = product;
  return (
    <Paper sx={{ px: 1, py: 2 }}>
      <Stack useFlexGap gap={2}>
        <Box
          component="img"
          src={images[0]}
          alt={name}
          sx={{
            width: "400px",
            mb: 3,
          }}
        />
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5">{name}</Typography>
          <Typography color={"info"} variant="h6">
            ${price}
          </Typography>
        </Stack>
        <Stack alignItems="center" alignContent="center">
          <Typography variant="subtitle1">Quantity:</Typography>
          <QuantityInput
            canAdd
            initValue={quantity}
            canRemove
            product={product}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CartItem;
