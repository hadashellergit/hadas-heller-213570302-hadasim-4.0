const express = require('express');
const router = express.Router();
const coronaEventsController= require('../controllers/coronaEventsController');

//GET
router.get('/getAllEvents', coronaEventsController.getCoronaData);
router.get('/getCoronaChartData',coronaEventsController.getCoronaChartData)
//POST
router.post('/coronaEvent', coronaEventsController.createCoronaEvent );


module.exports = router;