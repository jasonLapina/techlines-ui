import useProducts from "../../hooks/useProducts.ts";
import { useParams } from "react-router";
import Loading from "../../components/Loading.tsx";

const SingleProductPage = () => {
  const { productId } = useParams();

  const { data, isLoading } = useProducts(productId);

  if (isLoading) return <Loading />;

  return <div></div>;
};

export default SingleProductPage;
