const db = require('../config/db');
const fs = require('fs'); 

//GET
const find =async ()=>{
  try {
    const vaccintations = await db.query(`SELECT * FROM vaccinations`);
    return members;
  } catch (error) {
    throw error;
  }
}

const findUnVaccinatedCount = async (req,res) => {
  try {
    const query = `
      SELECT COUNT(m.id) AS unvaccinated_count
      FROM personaldata m
      LEFT JOIN vaccinations v ON m.id = v.member_id
      WHERE v.member_id IS NULL
    `;
    const result = await db.query(query);
    const unvaccinatedCount = result[0].unvaccinated_count;
    return unvaccinatedCount;
  } catch (error) {
    throw error;
  }
};
//POST
const create = async (vaccinData) => {
  try {
    console.log(vaccinData.member_id);
    // Check if the member has less than four vaccinations
    const [vaccinationCountRows] = await db.query('SELECT COUNT(*) AS vaccination_count FROM vaccinations WHERE member_id = ?', [vaccinData.member_id]);
    console.log("mjnhgf");
    
    console.log(vaccinationCountRows);
    const vaccinationCount = vaccinationCountRows.vaccination_count;
    console.log(vaccinationCount);
    if (vaccinationCount >= 4) {
      throw new Error('Cannot insert more than four vaccinations for a member');
    }

    // Insert the vaccination data
    await db.query('INSERT INTO vaccinations (member_id, vaccination_date, vaccination_type) VALUES (?, ?, ?)', [vaccinData.member_id, vaccinData.vaccination_date, vaccinData.vaccination_type]);
    console.log("probebly inserted");
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