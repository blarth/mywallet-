
import * as authService from "../services/authService.js"

export default async function signIn (req, res) {
    const {email} = req.body
    const user = await authService.checkUser(email)
    const token = await authService.createToken(user.id)
    res.send({
      token,
    });
  
}


