import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useProducts = <T>(productId?: string): UseQueryResult<T> => {
  const fetchProducts = async (): Promise<T> => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/products/${productId ?? ""}`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  };

  return useQuery({
    queryKey: ["products", productId],
    queryFn: fetchProducts,
    refetchOnWindowFocus: false,
  });
};

export default useProducts;
