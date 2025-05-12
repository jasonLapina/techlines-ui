import useProducts from "../../hooks/useProducts.ts";
import Loading from "../../components/Loading.tsx";
import ProductCard from "./ProductCard.tsx";
import { Product } from "../../types.ts";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store.ts";
import { useMemo } from "react";

const ProductsPage = () => {
  const { data, isLoading } = useProducts<{ products: Product }>();
  const { favoritesToggled, favorites } = useSelector(
    (state: RootState) => state.products,
  );

  const productsToRender = useMemo(() => {
    if (isLoading || !data) return [];

    return favoritesToggled ? favorites : data.products;
  }, [data, favoritesToggled, isLoading, favorites]);

  if (isLoading) return <Loading />;

  return (
    <>
      {favoritesToggled && (
        <Typography variant="subtitle2">* Showing favorites only</Typography>
      )}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          columnGap: 2,
          rowGap: 4,
          mb: 10,
          mt: 5,
          mx: 2,
        }}
      >
        {productsToRender.map((product: Product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </Box>
    </>
  );
};

export default ProductsPage;
