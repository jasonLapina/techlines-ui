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
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={product.name}
          image={product.images[0]}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {product.name}
          </Typography>
          <Typography variant="body2">{product.subtitle}</Typography>
          <Stack
            sx={{ mt: 2 }}
            flexDirection={"row"}
            justifyContent="space-between"
          >
            <Typography color="success" variant="h6">
              ${product.price}
            </Typography>
            <Chip color="info" label={product.category} />
          </Stack>
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
