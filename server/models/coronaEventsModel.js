const db = require('../config/db');
const fs = require('fs'); 


//GET
const find = async () => {
  try {
    //fetch evey row in the corona data 
    const coronaData = await db.query('SELECT * FROM coronadata');
    return coronaData;
  } catch (error) {
    throw error;
  }
};

//getChartData
const findChartData = async () => {
  try {
    //this query generate a object showing the number of sick members for each date within the last 30 days
    const query = `
    SELECT 
    DATE(subdate(CURDATE(), interval d.day_number day)) AS date,
    COUNT(CASE WHEN t.positive_test_date IS NOT NULL AND (t.recovery_date IS NULL OR t.recovery_date > DATE(subdate(CURDATE(), interval d.day_number day))) THEN 1 ELSE NULL END) AS sick_members_count
FROM (
    SELECT 0 AS day_number
    UNION ALL SELECT 1
    UNION ALL SELECT 2
    UNION ALL SELECT 3
    UNION ALL SELECT 4
    UNION ALL SELECT 5
    UNION ALL SELECT 6
    UNION ALL SELECT 7
    UNION ALL SELECT 8
    UNION ALL SELECT 9
    UNION ALL SELECT 10
    UNION ALL SELECT 11
    UNION ALL SELECT 12
    UNION ALL SELECT 13
    UNION ALL SELECT 14
    UNION ALL SELECT 15
    UNION ALL SELECT 16
    UNION ALL SELECT 17
    UNION ALL SELECT 18
    UNION ALL SELECT 19
    UNION ALL SELECT 20
    UNION ALL SELECT 21
    UNION ALL SELECT 22
    UNION ALL SELECT 23
    UNION ALL SELECT 24
    UNION ALL SELECT 25
    UNION ALL SELECT 26
    UNION ALL SELECT 27
    UNION ALL SELECT 28
    UNION ALL SELECT 29
) AS d
LEFT JOIN coronadata t ON DATE(t.positive_test_date) <= DATE(subdate(CURDATE(), interval d.day_number day))
AND (t.recovery_date IS NULL OR DATE(t.recovery_date) > DATE(subdate(CURDATE(), interval d.day_number day)))
WHERE DATE(subdate(CURDATE(), interval d.day_number day)) >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
GROUP BY DATE(subdate(CURDATE(), interval d.day_number day))
ORDER BY DATE(subdate(CURDATE(), interval d.day_number day));
    `;
    
    const data = await db.query(query);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }

  };
  const findById = async (id) => {
    //get the data od the corona event of the member with the given id
    return await db.query('SELECT * FROM coronadata WHERE member_id = ?', [id]);
  };
  
//POST
const create = async (coronaEventData) => {
  try {
    //create obj to simplfy the next  query
    const { member_id, positive_test_date, recovery_date } = coronaEventData;
    const values = [member_id, positive_test_date, recovery_date];
    //if the ui didnt send a recovery data (maybe member is still sick) insert only id ans positive test date
    if (!recovery_date) {
     await db.query('INSERT INTO coronadata (member_id, positive_test_date) VALUES (?, ?)', [member_id, positive_test_date]);  
    }
    //insert every column in table
    else{
     await db.query('INSERT INTO coronadata (member_id, positive_test_date, recovery_date) VALUES (?, ?, ?)', values);
    }
    return { message: 'event created successfully' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  find,
  findById,
  findChartData,
  create, 
};