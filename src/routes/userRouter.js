import { Router } from "express";
import signUp, { getFinancies, getSumFinancies, postFinancies } from "../controllers/userController.js";
import { validateBodyFinances, validateSchemaSignUp } from "../middlewares/schemasValidationMiddleware.js";
import { verifyTokenMiddleware } from "../middlewares/schemaValidationTokenMiddleware.js";


const userRouter = Router();

userRouter.post("/sign-up", validateSchemaSignUp, verifyTokenMiddleware ,signUp)
userRouter.post("/finnancial-events", validateBodyFinances, verifyTokenMiddleware, postFinancies)
userRouter.get("/finnancial-events", verifyTokenMiddleware, getFinancies)
userRouter.get("/financial-events/sum", verifyTokenMiddleware, getSumFinancies)

export default userRouter;
