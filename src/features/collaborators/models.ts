export interface Collaborators {
    id: number,
    name: string,
    position: string,
    email: string,
    phone: string,
    image: string
}

export interface CollaboratorsResponse {
    data: Collaborators[]
}
