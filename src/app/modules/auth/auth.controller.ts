import catchAsync from "../../utils/catchAsync";
import manageResponse from "../../utils/manageRes";
import { auth_services } from "./auth.service";

// create admin
const create_admin = catchAsync(async (req, res) => {
    const result = await auth_services.create_new_admin_into_db(req);
    manageResponse(res, {
        success: true,
        statusCode: 201,
        message: "Admin account created .",
        data: result
    })

})

export const auth_controllers = {
    create_admin
}
