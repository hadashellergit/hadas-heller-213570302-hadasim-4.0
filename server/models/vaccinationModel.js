const db = require('../config/db');

// Function to check if previous vaccinations are late
const checkVaccinationDates = async (memberId, givenDate) => {
  //chacks the number of later vaccination dates in the table to inform the user
  try {
    const query = `
      SELECT COUNT(*) AS invalid_count
      FROM vaccinations
      WHERE member_id = ? AND vaccination_date > ?
    `;
    const [result] = await db.query(query, [memberId, givenDate]);
    const invalidCount = result.invalid_count;

    return invalidCount > 0;
  } catch (error) {
    throw error;
  }
};

const find = async () => {
  try {
    const vaccinations = await db.query(`SELECT * FROM vaccinations`);
    return vaccinations;
  } catch (error) {
    throw error;
  }
};

const findUnVaccinatedCount = async () => {
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

const create = async (vaccinData) => {
  try {
    const [vaccinationCountRows] = await db.query('SELECT COUNT(*) AS vaccination_count FROM vaccinations WHERE member_id = ?', [vaccinData.member_id]);
    const vaccinationCount = vaccinationCountRows.vaccination_count;

    if (vaccinationCount >= 4) {
      throw new Error('Cannot insert more than four vaccinations for a member');
    }

    await db.query('INSERT INTO vaccinations (member_id, vaccination_date, vaccination_type) VALUES (?, ?, ?)', [vaccinData.member_id, vaccinData.vaccination_date, vaccinData.vaccination_type]);
    
    return { message: 'vaccination created successfully' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  find,
  findUnVaccinatedCount,
  create,
  checkVaccinationDates // Add the checkVaccinationDates function to module exports
};
