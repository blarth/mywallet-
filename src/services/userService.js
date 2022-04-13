import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { getUser } from "../repositories/authRepository.js";
import {createFinancesDB, createUserDb, getFinanciesDB} from "../repositories/userRepository.js"

export async function checkUserDuplicates(email){
    const { rows : [user] } = await getUser(email)

    if (user) throw {type: "signup_info_error" , message: "email already in use"}
    return null
}

export async function encryptPassword(password){
    return bcrypt.hashSync(password, 12);
}

export async function insert(name, email, password){
    const createdUser = await createUserDb(name, email, password)
    return createdUser
}

export async function getUserByToken(token){
    return jwt.verify(token, process.env.JWT_SECRET);
}

export async function insertFinance(id, value, type){
    const createFinances = await createFinancesDB(id, value, type)
    return createFinances
}

export async function getFinancies(id){
    const {rows : finances} = await getFinanciesDB(id)
    return finances
}

export async function sumFinances(array){
    return array.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
}