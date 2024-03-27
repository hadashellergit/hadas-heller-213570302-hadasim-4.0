const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
//used for the img upload
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

//GET
router.get('/getAllMembers', memberController.getAllMembers);

//POST
router.post('/createMember', memberController.createMember);
router.post('/uploadImage', upload.single('image'), memberController.uploadImage);


module.exports = router;