import useProducts from "../../hooks/useProducts.ts";
import { useParams } from "react-router";
import Loading from "../../components/Loading.tsx";
import { Box, Button, Chip, Rating, Stack, Typography } from "@mui/material";
import { Product } from "../../types.ts";

const SingleProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useProducts<{ product: Product }>(productId);

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
  } = data.product;

  return (
    <Box
      sx={{ display: "grid", alignItems: "start" }}
      gridTemplateColumns="2fr 1fr"
    >
      {/*left hand side*/}
      <Stack useFlexGap gap={1}>
        <Typography variant="h3">{name}</Typography>
        <Typography color="primary.light" variant="h5">
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
          sx={{ my: 2, width: "fit-content", fontWeight: "bold" }}
          color="info"
        />

        <Button variant="outlined">Add to cart</Button>
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
