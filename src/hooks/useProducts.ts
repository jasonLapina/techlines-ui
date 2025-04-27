import { useQuery } from "@tanstack/react-query";

const useProducts = () => {
  const fetchProducts = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    return await res.json();
  };
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export default useProducts;
