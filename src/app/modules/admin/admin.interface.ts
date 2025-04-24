import { ObjectId } from "mongoose";

export interface IAdmin_Interface {
    name: string;
    email: string;
    profilePhoto?: string;
    phone?: string;
    user: ObjectId
}