
//untuk login input
export type LoginInput = {
    email : string,
    password : string
}


//untuk repsonse login
export type LoginResponse = {
    token: string,
    user: User
}

//type untuk user 
export type User = {
    id: string,
    name: string,
    email: string
}