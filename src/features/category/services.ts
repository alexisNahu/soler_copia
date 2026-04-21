import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Category} from "@/features/category/models.ts";

export const CategoryServices = {
    async get(): Promise<{data: Category[]}> {
        return await apiClient<{data: Category[]}>(API_ENDPOINTS.categories);
    },
    async getByIdOrSlug(param: number | string): Promise<{ data: Category }> {
        return await apiClient<any>(`${API_ENDPOINTS.categories}/${param}`);
    }
}
