const express = require('express');
const router = express.Router();
const vaccinationController = require('../controllers/vaccinationController');

//GET
router.get('/getVaccinationData', vaccinationController.getVaccinations);
router.get('/unVaccinatedMembersCounter',vaccinationController.unVaccinatedMembersCounter)

//POST
router.post('/createVaccination', vaccinationController.createVaccination);


module.exports = router;