// create new admin

import { Request } from "express"
import { User_Model } from "./auth.schema";
import { Admin_Model } from "../admin/admin.schema";
import mongoose from "mongoose";
import { helpers } from "../../utils/helpers";
import AppError from "../../utils/appError";

const create_new_admin_into_db = async (req: Request) => {
    const payload = req.body;
    const isExistUser = await User_Model.findOne({ email: payload.admin.email })
    if (isExistUser) {
        throw new AppError(403, "Account already registered !!!")
    }

    const session = await mongoose.startSession();
    try {
        session.startTransaction();
        const hashPass = helpers.hashPassword(payload.password)
        const userData = {
            password: hashPass,
            email: payload.admin.email,
            role: payload.role,
        };
        const createUser = await User_Model.create([userData], { session });

        const adminData = {
            ...payload.admin,
            user: createUser[0]._id,
        };
        const createAdmin = await Admin_Model.create([adminData], { session });
        await session.commitTransaction();
        session.endSession();
        return { user: createUser[0], admin: createAdmin[0] };

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
};

export const auth_services = {
    create_new_admin_into_db
}