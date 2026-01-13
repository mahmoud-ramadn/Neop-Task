import { ref } from "vue";
import { axiosInstance } from "@/lib/axios";
export function useProduct() {
  const data = ref<Product | null>(null);
  const loading = ref(false);
  const error = ref<ApiError | null>(null);

  const fetchProduct = async (id: string) => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axiosInstance.get<Product>(`/products/${id}`);
      data.value = response.data;
    } catch (err: any) {
      error.value = { message: err.response?.data?.message || "Unknown error" };
      console.error("Failed to fetch product:", err);
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    fetchProduct,
  };
}
