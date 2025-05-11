import { Box, Button, Chip, Rating, Stack, Typography } from "@mui/material";
import { Product } from "../../../types";
import QuantityInput from "./QuantityInput";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (quantity: number) => void;
}

const ProductDetails = ({ product, onAddToCart }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const { name, subtitle, description, rating, numberOfReviews, stock, price } = product;

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <Stack useFlexGap gap={1}>
      <Typography variant="h3">{name}</Typography>
      <Typography color="info" variant="h5">
        ${price}
      </Typography>
      <Stack alignItems="center" flexDirection="row" gap={1} useFlexGap>
        <Rating value={rating} precision={0.5} readOnly />
        <Typography sx={{ fontWeight: "bold" }}>
          {numberOfReviews} Review{numberOfReviews > 1 ? "s" : ""}
        </Typography>
      </Stack>
      <Typography sx={{ my: 2 }}>{subtitle}</Typography>
      <Typography>{description}</Typography>
      <Chip
        label={`IN STOCK: ${stock}`}
        variant="filled"
        sx={{ width: "fit-content", fontWeight: "bold", mt: 2 }}
        color="warning"
      />

      <Box sx={{ my: 3 }}>
        <Typography variant="h6">Quantity</Typography>
        <QuantityInput onIncrement={(quantity) => setQuantity(quantity)} />
      </Box>

      <Button onClick={handleAddToCart} variant="contained">
        Add to cart
      </Button>
    </Stack>
  );
};

export default ProductDetails;