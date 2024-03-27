const db = require('../config/db');
const fs = require('fs'); 


//GET
const find = async () => {
  try {
    const members = await db.query('SELECT * FROM personaldata');
    return members;
  } catch (error) {
    throw error;
  }
};

//POST
const create = async (memberData) => {
  try {
    const { id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data } = memberData;
    const values = [id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data];
    await db.query('INSERT INTO personaldata (id,first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone, image_data) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?)', values);
    return { message: 'Member created successfully' };
  } catch (error) {
    throw error;
  }
};
const postImage =async (memberId, imagePath) => {
  try {
    // Read the image file and convert it to a Base64-encoded string
    const imageBuffer = fs.readFileSync(imagePath);
    const imageData = imageBuffer.toString('base64');
    // Execute SQL query to save the image data in the database
    const query = 'UPDATE personaldata SET image_data = ? WHERE id = ?';
    const result = await db.query(query, [imageData, memberId]);
    return result.affectedRows > 0; // Return true if the update was successful
  } catch (error) {
    throw error;
  }
}
module.exports = {
  find,
  create,
  postImage
};
