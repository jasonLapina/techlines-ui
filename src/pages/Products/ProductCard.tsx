import { Product } from "../../types.ts";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddShoppingCart, Favorite, FavoriteBorder } from "@mui/icons-material";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const getStockChip = (): {
    text: string;
    color: "success" | "error" | "warning";
  } => {
    const { stock } = product;

    if (stock > 5) {
      return {
        text: "In Stock",
        color: "success", // Use "success" color for more than 5
      };
    } else if (stock > 0 && stock <= 5) {
      return {
        text: `${stock} Left`,
        color: "warning", // Use "warning" color for 1 to 5 stocks
      };
    } else {
      return {
        text: "Out of Stock",
        color: "error", // Use "error" color when stock is 0
      };
    }
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          image={product.images[0]}
        />
        <CardContent>
          <Stack flexDirection="row" useFlexGap gap={1}>
            {product.productIsNew && <Chip color="info" label="New" />}
            <Chip label={getStockChip().text} color={getStockChip().color} />
          </Stack>
          <Typography sx={{ my: 3 }} variant="h6">
            {product.name}
          </Typography>
          <Typography variant="body2">{product.subtitle}</Typography>
          <Typography sx={{ mt: 2 }} color="success" variant="h6">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title="Add to Favorites" arrow placement="top">
          <Checkbox
            color="secondary"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          />
        </Tooltip>
        <Tooltip title="Add to Cart" arrow placement="top">
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
