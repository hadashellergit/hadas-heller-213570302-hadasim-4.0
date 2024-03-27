const Member = require('../models/memberModel');

//GET
const getAllMembers = async () => {
  return await Member.find();
};

//POST
const uploadImage = async(memberId, imagePath)=>{
  return await Member.postImage(memberId, imagePath);
}
const createMember = async (memberData) => {
  return await Member.create(memberData);
};


module.exports = {
    getAllMembers,
    uploadImage,
    createMember,
};