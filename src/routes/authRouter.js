import { Router } from "express";
import signIn from "../controllers/authController.js";
import { validateSchemaSignIn } from "../middlewares/schemasValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-in",  validateSchemaSignIn, signIn);

export default authRouter;
