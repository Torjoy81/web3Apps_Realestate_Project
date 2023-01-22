import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbConnection = await mysql.createConnection({
    host: "127.0.0.1",
    database: "realestate_data_set",
    user: "hbstudent",
    password: "hbstudent",
  });
  try {
    const data = await dbConnection.execute(query, values);
    dbConnection.end();
    return data;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}
