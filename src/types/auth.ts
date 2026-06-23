//request 
export type LoginRequest = {
    username: string;
    password: string;
}

//response
export type LoginResponse = {
    token: string;
    user:User
}

export type User = {
    id: number;
    name: string;
    username: string;
}