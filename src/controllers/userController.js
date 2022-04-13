
import * as userService from "../services/userService.js";

export default async function signUp(req, res){
    
      const { name, email, password } = req.body;
      const invalidUser = await userService.checkUserDuplicates(email)
      const hashedPassword = userService.encryptPassword(password)
      const createdUser = await userService.insert(name, email, hashedPassword)
      res.sendStatus(201);
  }
  
  export async function postFinancies(req, res){  
      const {token} = res.locals 
      const { value, type } = req.body;
      const user = userService.getUserByToken(token)
      const createdFinances = await userService.insertFinance(user.id, value, type)
      res.sendStatus(201);  
  }

  export async function getFinancies(req, res){
    const {token} = res.locals 
    const user = userService.getUserByToken(token)
    const finances = userService.getFinancies(user.id)
    res.send(finances);
}

export async function getSumFinancies(req, res){
    const {token} = res.locals 
    const user = userService.getUserByToken(token)   
    const finances = userService.getFinancies(user.id)  
    const financesSum = userService.financesSum(finances) 
    res.send({ financesSum });
}