const memberService = require('../services/memberService');
const { validateForm } = require('../validationHelpFunctions');

//GET
const getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();
    res.status(201).json(members);
  } catch (error) {
    res.status(500).json({ error: 'server error' });
  }
};

const getMemberById = async (req, res) => {
  try {
    const member = await memberService.getMemberById(req.body.id);
    res.status(201).json(member);
  } catch (error) {
    res.status(500).json({ error: 'server error' });
  }
};

//POST
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imagePath = req.file.path;
    const memberId = req.body.memberId;
    const success = await memberService.uploadImage(memberId, imagePath);
    if (success) {
      res.status(201).json({ message: 'uploaded successfully' });
    } else {
      res.status(500).json({ error: 'failed to save image' });
    }
  } catch (error) {
    console.error('error uploading image:', error);
    res.status(500).json({ error: 'server error' });
  }
};

const createMember = async (req, res) => {
  try {
    const requiredFields = ['id', 'first_name', 'last_name', 'city', 'street', 'street_number', 'birth_date', 'phone', 'mobile_phone'];

    const errors = await validateForm(req.body, requiredFields);

    //  errors is a promise, await its resolution before accessing its value
    const resolvedErrors = await errors;

    console.log(resolvedErrors);
    console.log(Object.keys(resolvedErrors).length);

    // check if there are errors
    if (Object.keys(resolvedErrors).length > 0) {
      return res.status(400).json({ errors: resolvedErrors });
    }

    //creating the member
    const newMember = await memberService.createMember(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    console.error('error creating member:', error);
    res.status(400).json({ error: 'an error occurred while creating member' });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  uploadImage,
  createMember
};

