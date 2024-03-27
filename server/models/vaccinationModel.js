const db = require('../config/db');
const fs = require('fs'); 

//GET
const find =async ()=>{
  try {
     //fetch every row from vaccination table
    const vaccintations = await db.query(`SELECT * FROM vaccinations`);
    return members;
  } catch (error) {
    throw error;
  }
}

const findUnVaccinatedCount = async (req,res) => {
  try {
    //query counts the number of members in the personaldata table who do not have corresponding entries in the vaccinations table 
    const query = `
      SELECT COUNT(m.id) AS unvaccinated_count
      FROM personaldata m
      LEFT JOIN vaccinations v ON m.id = v.member_id
      WHERE v.member_id IS NULL
    `;
    const result = await db.query(query);
    //result is an array.. so..
    const unvaccinatedCount = result[0].unvaccinated_count;
    return unvaccinatedCount;
  } catch (error) {
    throw error;
  }
};

//POST
const create = async (vaccinData) => {
  try {
    // query to check if the member has less than four vaccinations (there is a sql trigger with the same constraint)
    const [vaccinationCountRows] = await db.query('SELECT COUNT(*) AS vaccination_count FROM vaccinations WHERE member_id = ?', [vaccinData.member_id]);
    const vaccinationCount = vaccinationCountRows.vaccination_count;

    //if the member has more then four vaccination info
    if (vaccinationCount >= 4) {
      throw new Error('Cannot insert more than four vaccinations for a member');
    }

    // else Insert the vaccination data
    await db.query('INSERT INTO vaccinations (member_id, vaccination_date, vaccination_type) VALUES (?, ?, ?)', [vaccinData.member_id, vaccinData.vaccination_date, vaccinData.vaccination_type]);
    return { message: 'vaccination created successfully' };
  } catch (error) {
    throw error;
  }
};


module.exports = {
  find,
  findUnVaccinatedCount,
  create
};