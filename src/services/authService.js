import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { getUser } from "../repositories/authRepository.js";

export async function checkUser(email){
    const { rows : [user] } = await getUser(email)

    if (!user || !bcrypt.compareSync(password, user.password)) throw {type: "auth_error" , message: "Password or user with error"}
    return user
}

export async function createToken(id){
    const token = jwt.sign(
      {
        id: id,
      },
      process.env.JWT_SECRET
    );

    return token
}

export async function checkToken(token){
  jwt.verify(token, process.env.JWT_SECRET);
  return user
}