import { IUser } from "./userInterface";

export interface IGame {
    title: string,
    genre: string,
    imageUrl: string,
    description: string,
    _id: string,
    price: Number,
    owner: IUser
}