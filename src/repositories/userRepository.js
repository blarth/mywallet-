import connection from "../database.js";


export async function createUserDb(name, email, hashedPassword){
  return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
    [name, email, hashedPassword]
  );
}

export async function createFinancesDB(id, value, type){
  return await connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3) RETURNING *`,
    [id, value, type]
  );
}

export async function getFinanciesDB(id){
  return await connection.query(
    `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
    [id]
  );
}