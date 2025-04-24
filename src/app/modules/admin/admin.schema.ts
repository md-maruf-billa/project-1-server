import { model, Schema } from "mongoose";
import { IAdmin_Interface } from "./admin.interface";

export const Admin_Schema = new Schema<IAdmin_Interface>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: false },
    profilePhoto: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "users", required: true }
}, {
    versionKey: false,
    timestamps: true
});



export const Admin_Model = model("admins", Admin_Schema)