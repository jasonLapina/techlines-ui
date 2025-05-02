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
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/slices/productSlice.ts";
import { useNavigate } from "react-router";
import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { addToCart } from "../../redux/slices/cartSlice.ts";

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
  const dispatch = useDispatch();

  const handleFavorite = (checked: boolean) => {
    if (checked) {
      dispatch(addToFavorites(product));
    } else {
      dispatch(removeFromFavorites(product._id));
    }
  };

  const navigate = useNavigate();

  const favIds = JSON.parse(localStorage.getItem("favorites") ?? "[]").map(
    (item: Product | undefined) => item?._id,
  );

  const isFavorite = useMemo(() => {
    return favIds.includes(product._id);
  }, [product._id, favIds]);

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (product.images.length < 2) {
      return;
    } else {
      setHovered(true);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product }));
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea
        onMouseLeave={() => setHovered(false)}
        onMouseEnter={handleMouseEnter}
        onClick={() => navigate(`/${product._id}`)}
      >
        {!hovered && (
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
            <CardMedia
              component="img"
              alt={product.name}
              image={product.images[0]}
              sx={{
                height: "320px",
                my: 1,
              }}
            />
          </motion.div>
        )}

        {hovered && (
          <motion.div
            initial={{ opacity: 0.5, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <CardMedia
              component="img"
              alt={product.name}
              image={product.images[1]}
              sx={{
                height: "320px",
                my: 1,
              }}
            />
          </motion.div>
        )}

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
            onChange={(e) => handleFavorite(e.target.checked)}
            checked={isFavorite}
          />
        </Tooltip>
        <Tooltip title="Add to Cart" arrow placement="top">
          <IconButton
            onClick={handleAddToCart}
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCart />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
