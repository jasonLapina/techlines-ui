import useProducts from "../../hooks/useProducts.ts";
import Loading from "../../components/Loading.tsx";
import ProductCard from "./ProductCard.tsx";
import { Product } from "../../types.ts";
import { Box } from "@mui/material";

const ProductsPage = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        columnGap: 2,
        rowGap: 4,
        my: 10,
        mx: 2,
      }}
    >
      {data.products.map((product: Product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </Box>
  );
};

export default ProductsPage;
