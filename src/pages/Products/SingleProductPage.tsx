import useProducts from "../../hooks/useProducts.ts";
import { useParams } from "react-router";
import Loading from "../../components/Loading.tsx";
import { Box, Stack } from "@mui/material";
import { Product, User } from "../../types.ts";
import { addToCart } from "../../redux/slices/cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { useMutation } from "@tanstack/react-query";
import ProductDetails from "./Components/ProductDetails.tsx";
import ProductImages from "./Components/ProductImages.tsx";
import ReviewSection from "./Components/ReviewSection.tsx";
import { useSnackbar } from "notistack";

const SingleProductPage = () => {
  const { productId } = useParams();
  const { data, isLoading, refetch } = useProducts<{ product: Product }>(
    productId,
  );
  const dispatch = useDispatch();
  const userInfo = useSelector(
    (state: RootState) => state.user.userInfo,
  ) as unknown as User;

  const addReviewFn = async ({
    title,
    comment,
    rating,
  }: {
    title: string;
    comment: string;
    rating: number;
  }) => {
    const payload = {
      userId: userInfo?._id,
      review: {
        title,
        comment,
        rating,
      },
      productId: productId,
    };
    await fetch(`${import.meta.env.VITE_API_URL}/reviews/post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: "include",
    });
  };

  const { mutate } = useMutation({
    mutationFn: addReviewFn,
    onSuccess: () => {
      refetch();
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  if (isLoading) return <Loading />;
  if (!data) return <p>Product not found</p>;

  const handleAddToCart = (quantity: number) => {
    dispatch(addToCart({ product: data.product, quantity }));
    enqueueSnackbar("Product added to cart", { variant: "success" });
  };

  const handleSubmitReview = (
    title: string,
    comment: string,
    rating: number,
  ) => {
    mutate({ title, comment, rating });
  };

  return (
    <Box
      sx={{ display: "grid", alignItems: "start" }}
      gridTemplateColumns="2fr 1fr"
    >
      {/* Left hand side */}
      <Stack useFlexGap gap={1}>
        <ProductDetails product={data.product} onAddToCart={handleAddToCart} />
        <ReviewSection
          reviews={data.product.reviews}
          productId={productId}
          userInfo={userInfo}
          onSubmitReview={handleSubmitReview}
        />
      </Stack>

      {/* Right hand side */}
      <ProductImages images={data.product.images} name={data.product.name} />
    </Box>
  );
};

export default SingleProductPage;
