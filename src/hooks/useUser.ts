import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useUser = <T>(): UseQueryResult<T> => {
  const fetchUser = async (): Promise<T> => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/users/profile`, {
      credentials: "include",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return await res.json();
  };

  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    refetchOnWindowFocus: false,
  });
};

export default useUser;
