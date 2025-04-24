import { Router } from "express";
import { auth_controllers } from "./auth.controller";
import requestValidator from "../../middlewares/requestValidator";
import { auth_validation } from "./auth.validation";

const authRouter = Router();

authRouter.post("/create-admin", requestValidator(auth_validation.create_admin), auth_controllers.create_admin)



export default authRouter;