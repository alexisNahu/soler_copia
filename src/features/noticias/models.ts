import type {Meta} from "@/core/models";

export interface News {
    id: number,
    title: string,
    slug: string,
    short_descriptions: string,
    featured_image: string,
    category: {
        name: string,
        slug: string
    },
    published_at: string,
    content?: string,
}

export interface NewsResponse {
    data: News[],
    meta: Meta
}
