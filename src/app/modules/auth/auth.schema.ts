import { model, Schema } from "mongoose";
import { IUser_Interface } from "./auth.interface";

const User_Schema = new Schema<IUser_Interface>({
    email: { type: String },
    password: { type: String },
    isDeleted: { type: Boolean, default: false },
    role: { type: String, enum: ["ADMIN", "USER", "SUPER_ADMIN"] },
    account_status: { type: String, enum: ["ACTIVE", "BLOCKED"], default: "ACTIVE" }
}, {
    versionKey: false,
    timestamps: true
})

export const User_Model = model("users", User_Schema)