
import cors from "cors";
import express from "express";
import "express-async-errors";
import router from "./routes/index.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use((error, req, res, next) => {
  if (error.type === "invalid_entity") return res.sendStatus(422);
  if (error.type === "auth_error") return res.sendStatus(401);
  if (error.type === "signup_info_error") return res.sendStatus(409);
  return res.sendStatus(500);
})
app.use(router)


export default app;
