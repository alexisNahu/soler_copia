import {BACKEND_API} from "@/core/api/index.ts";

const BASE_URL = BACKEND_API


export const apiClient = async <T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> => {
    const url = `${BASE_URL}${endpoint}`;
    const config = {
        ...options,
        headers: {
            ...options.headers,
        },
    };

    try {
        const response = await fetch(url, config);

        if (!response.ok) throw new Error(`Error API: ${response.status} ${response.statusText}`);

        return await response.json() as T;
    } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
    }
};
