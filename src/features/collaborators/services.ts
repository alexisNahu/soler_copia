import {apiClient} from "@/core/api/config.ts";
import {API_ENDPOINTS} from "@/core/api";
import type {Collaborators} from "@/features/collaborators/models.ts";

export const CollaboratorsServices = {
    async get(): Promise<{ data: Collaborators[]}> {
        return await apiClient<{ data: Collaborators[] }>(API_ENDPOINTS.collaborators);
    },
}
