export interface DtoTokenRespose {
    status: number
    errorMsg: string
    result: Token
}

export interface Token {
    token: string
}