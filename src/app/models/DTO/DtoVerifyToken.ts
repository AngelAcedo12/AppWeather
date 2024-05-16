export interface DtoVerifyToken {
    status: number
    errorMsg: string
    result: Result
  }
  
  export interface Result {
    userLogin: UserLogin
  }
  
  export interface UserLogin {
    rol: number
    name: string
    id_user: number
  }
  