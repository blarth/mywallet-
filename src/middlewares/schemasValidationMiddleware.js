export async function validateSchemaSignIn(req, res, next){
    const { email, password } = req.body;

    if (!email || !password) throw {type: "invalid_entity" , message: "schema didnt pass"}
    next()
}

export async function validateSchemaSignUp(req, res, next){
    const { name, email, password } = req.body;

    if (!name || !email || !password) throw {type: "invalid_entity" , message: "schema didnt pass"}
    next()
}

export async function validateBodyFinances(req, res, next){
    const { value, type } = req.body;
    if (!value || !type) throw {type: "invalid_entity" , message: "schema didnt pass missing type or value"}
    const financialTypes = ["INCOME", "OUTCOME"];
    if (!financialTypes.includes(type)) throw {type: "invalid_entity" , message: "schema didnt missing type"}
    if (value < 0) throw {type: "invalid_entity" , message: "schema didnt pass value"}
    next()
}