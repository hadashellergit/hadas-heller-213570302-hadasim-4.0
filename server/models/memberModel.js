const db = require('../config/db');
const fs = require('fs'); 


//GET
const find = async () => {
  try {
    //fetch every row from personal data table
    const members = await db.query('SELECT * FROM personaldata');
    return members;
  } catch (error) {
    throw error;
  }
};
const findById = async (memberId) => {
  try {
    const member = await db.query('SELECT * FROM personaldata where id=');
    return member;
  } catch (error) {
    throw error;
  }
};

//POST
const create = async (memberData) => {
  try {
    //create obj to simplfy the next  query
    const { id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data } = memberData;
    const values = [id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data];
    //inserting the member data to the personal data sql table
    await db.query('INSERT INTO personaldata (id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
    return { message: 'Member created successfully' };
  } catch (error) {
    throw error;
  }
};

const postImage =async (memberId, imagePath) => {
  try {
    // read the image file and convert it to a string
    const imageBuffer = fs.readFileSync(imagePath);
    const imageData = imageBuffer.toString('base64');
    // sql query to save the image data in the database
    const query = 'UPDATE personaldata SET image_data = ? WHERE id = ?';
    const result = await db.query(query, [imageData, memberId]);
    // return true if the update was successful
    return result.affectedRows > 0; 
  } catch (error) {
    throw error;
  }
}
module.exports = {
  find,
  findById,
  create,
  postImage
};
