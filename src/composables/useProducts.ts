import { ref, onMounted } from "vue";
import { axiosInstance } from "@/lib/axios";
export function useProducts() {
  const data = ref<Product[]>([]);
  const loading = ref(false);
  const error = ref<ApiError | null>(null);

  const useCatgoryiesProducts = async (selectedCategory: string = "beauty") => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axiosInstance.get<ProductsResponse>(
        `/products/category/${selectedCategory}`
      );
      data.value=response.data.products
    } catch (err: any) {
      error.value = { message: err.response?.data?.message || "Unknown error" };
      console.error("Failed to fetch categories:", err);
    } finally {
      loading.value = false;
    }
  };
  onMounted(useCatgoryiesProducts);

  return {
    data,
    loading,
    error,
    useCatgoryiesProducts,
  };
}
