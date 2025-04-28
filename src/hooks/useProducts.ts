import { useQuery } from "@tanstack/react-query";

const useProducts = (productId?: string) => {
  const fetchProducts = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/products/${productId ?? ""}`,
    );
    return await res.json();
  };
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
