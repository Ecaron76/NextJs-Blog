import { useQuery } from "react-query";
import axios from "axios";
import { Post } from "@prisma/client";

const getPostsByCategory = async (category: string) => {
  try {
    const { data } = await axios.get(`/api/posts/category/${category}`);
    return data;
  } catch (error) {
    console.error("Error fetching posts by category:", error);
    return [];
  }
};

export function usePostsCategory(category: string) {
  return useQuery({
    queryFn: () => getPostsByCategory(category),
    enabled: !!category,
  });
}