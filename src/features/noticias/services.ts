import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {News, NewsResponse} from "@/features/noticias/models.ts";

export const NewsServices = {
    async get(): Promise<NewsResponse> {
        return await apiClient<NewsResponse>(API_ENDPOINTS.news);
    },
    async getByIdOrSlug(param: number | string): Promise<{ data: News }> {
        return await apiClient<any>(`${API_ENDPOINTS.news}/${param}`);
    }
}
