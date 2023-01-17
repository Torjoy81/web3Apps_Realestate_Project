import { query } from "./db.js";

export default async function handler(req, res) {
  try {
    const queryStatement = `SELECT *
FROM properties 
INNER JOIN agents ON properties.agent_id=agents.agent_id WHERE properties.Image IS NOT NULL`;
    const house_detail_list = [];
    const listOfData = await query({
      query: queryStatement,
      values: house_detail_list,
    });
    res.status(200).json({ houseList: listOfData });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
