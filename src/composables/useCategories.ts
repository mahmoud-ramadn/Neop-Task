// src/composables/useCategories.ts
import { ref, onMounted } from "vue";
import { axiosInstance } from "@/lib/axios";

export function useCategories() {
  const data = ref<Category[]>([]);
  const loading = ref(false);
  const error = ref<ApiError | null>(null);

  const fetchCategories = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axiosInstance.get("/products/category-list");
      data.value = response.data;
      
    } catch (err:any) {
      error.value = err;
      console.error("Failed to fetch categories:", err);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchCategories);

  return {
    data,
    loading,
    error,
    fetchCategories,
  };
}
