const memberService = require('../services/memberService');

//GET
const getAllMembers = async (req, res) => {
  try { 
    //fetching the service return
    const members = await memberService.getAllMembers();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'server error' });
  }
};

//POST
const uploadImage = async (req, res) => {
  try {
    //check if file exist
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imagePath = req.file.path;
    const memberId = req.body.memberId; 
    //send the file data  to service
    const success = await memberService.uploadImage(memberId, imagePath);
    if (success) {
      res.json({ message: 'uploaded succesfully' });
    } else {
      res.status(500).json({ error: 'failed to save img',message:'failed to save img' });
    }
  } catch (error) {
    console.error('error uploading img:', error);
    res.status(500).json({ error: 'server error' });
  }
};

const createMember = async (req, res) => {
  try {
    const { id, first_name, last_name, city, street, street_number, birth_date, phone, mobile_phone } = req.body;

    // required field validation
    if (!id || !first_name || !last_name || !city || !street || !street_number || !birth_date || !phone || !mobile_phone) {
      return res.status(400).json({ error: 'all fields are required' });
    }
    // date format validation
    const birthDateValid = new Date(birth_date);
    if (isNaN(birthDateValid.getTime())) {
      return res.status(400).json({ error: 'invalid birth date format' });
    }

    // birth date validation
    if (birthDateValid > new Date()) {
      return res.status(400).json({ error: 'birth date cannot be in the future' });
    }

    //send the request body to service
    const newMember = await memberService.createMember(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    console.error('error creating member:', error);
    res.status(400).json({ error: 'an error occurred while creating member',message:'an error occurred while creating member' });
  }
};


module.exports = {
    getAllMembers,
    uploadImage,
    createMember
  };