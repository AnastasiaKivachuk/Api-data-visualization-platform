export interface UserInterface {
    id: string
    name: number
    rocket: string
    timestamp: string
    twitter: string
}

export interface UsersInterface {
    users?: UserInterface[]
}