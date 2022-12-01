export interface IUser{
    token: string;
    expiresIn: number;
    userData: {
        id: string;
        email: string;
        username: string;
        password: string;
    };
   
}

export type User = {
        email: string;
        username: string;
        password: string;
        rePassword: string
      
}