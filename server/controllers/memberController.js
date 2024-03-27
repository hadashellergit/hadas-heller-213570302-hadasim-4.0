const memberService = require('../services/memberService');

const getAllMembers = async (req, res) => {
  try {
   
    const members = await memberService.getAllMembers();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imagePath = req.file.path;
    const memberId = req.body.memberId; // Assuming memberId is sent in the request body
    const success = await memberService.uploadImage(memberId, imagePath);

    if (success) {
      res.json({ message: 'Image uploaded successfully' });
    } else {
      res.status(500).json({ error: 'Failed to save image' });
    }
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createMember = async (req, res) => {
  try {
    const newMember = await memberService.createMember(req.body);
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = {
    getAllMembers,
    uploadImage,
    createMember
  };