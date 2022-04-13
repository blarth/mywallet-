

export async function verifyTokenMiddleware(req, res, next){
    const authorization = req.headers.authorization || "";
    const token = authorization.replace("Bearer ", "");
    
    if (!token) throw {type: "auth_error" , message: "Unauthorized"}
    res.locals.token = token
    next()
}