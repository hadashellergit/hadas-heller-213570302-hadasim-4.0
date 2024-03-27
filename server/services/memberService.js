const Member = require('../models/memberModel');

const getAllMembers = async () => {
  return await Member.find();
};

const uploadImage = async(memberId, imagePath)=>{
  return await Member.postImage(memberId, imagePath);
}
const createMember = async (memberData) => {
  return await Member.create(memberData);
};

// Other service methods...

module.exports = {
    getAllMembers,
    uploadImage,
    createMember,
  // Other service methods...
};