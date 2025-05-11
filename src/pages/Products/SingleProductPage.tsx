import useProducts from "../../hooks/useProducts.ts";
import { useParams } from "react-router";
import Loading from "../../components/Loading.tsx";
import {
  Box,
  Button,
  Chip,
  Rating,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Product, Review } from "../../types.ts";
import QuantityInput from "./Components/QuantityInput.tsx";
import { addToCart } from "../../redux/slices/cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { RootState } from "../../redux/store.ts";

const SingleProductPage = () => {
  const { productId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const { data, isLoading } = useProducts<{ product: Product }>(productId);
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: RootState) => state.user);

  const hasUser = useMemo(() => userInfo !== null, [userInfo]);

  if (isLoading) return <Loading />;
  if (!data) return <p>Product not found</p>;

  const {
    name,
    images,
    subtitle,
    description,
    rating,
    numberOfReviews,
    stock,
    price,
    reviews,
  } = data.product;

  const handleAddToCart = () => {
    dispatch(addToCart({ product: data.product, quantity: quantity }));
  };

  const handleReviewInit = () => {
    setIsReviewOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{ display: "grid", alignItems: "start" }}
      gridTemplateColumns="2fr 1fr"
    >
      {/*left hand side*/}
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
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ mt: 3, mb: 2 }} variant="h5">
              Reviews
            </Typography>
            <Stack direction="row" useFlexGap gap={1} alignItems="center">
              {isReviewOpen && <Button>Submit</Button>}
              <Tooltip title={hasUser ? null : "Must be signed in"}>
                <Button
                  onClick={handleReviewInit}
                  disabled={!hasUser}
                  variant="text"
                  sx={{ color: isReviewOpen ? "error.light" : "primary.light" }}
                >
                  {isReviewOpen ? "Cancel" : "Add a review"}
                </Button>
              </Tooltip>
            </Stack>
          </Stack>
          {isReviewOpen && (
            <TextField
              sx={{ mb: 3, mt: 1 }}
              fullWidth
              placeholder="Comment your review here"
            />
          )}
          {reviews.map((review: Review) => (
            <Box key={review._id}>
              <Stack
                alignItems="center"
                sx={{ mb: 2 }}
                useFlexGap
                flexDirection="row"
                gap={1}
              >
                <Rating readOnly value={review.rating} />
                <Typography>{review.title}</Typography>
              </Stack>
              <Typography>{review.comment}</Typography>
              <Typography variant="overline">
                by <strong>{review.name}</strong>
                {" - "}
                <Box component="span" sx={{ opacity: 0.8 }}>
                  {new Date(review.createdAt).toLocaleDateString()}
                </Box>
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
      {/*right hand side*/}
      <Stack useFlexGap gap={2}>
        {images.map((img) => (
          <Box
            maxWidth="600px"
            component="img"
            src={img}
            alt={name}
            key={img}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SingleProductPage;
