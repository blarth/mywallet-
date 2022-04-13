import connection from "../database.js";

export async function getUser(email){
    return connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
}

