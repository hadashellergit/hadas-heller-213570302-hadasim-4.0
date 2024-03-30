const vaccinationService = require('../services/vaccinationService');

const getVaccinations = async (req, res) => {
  try {
    const vaccinations = await vaccinationService.getVaccinations();
    res.json(vaccinations);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const unVaccinatedMembersCounter = async (req,res)=>{
  try{
    const unVaccinatedCount = await vaccinationService.unVaccinatedMembersCounter();
    res.json(unVaccinatedCount);
  } catch (error){
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createVaccination = async (req, res) => {
  const { member_id, vaccination_date, vaccination_type } = req.body;
  var message=null;

  //date validatinons
  if (!member_id || !vaccination_date || !vaccination_type) {
    return res.status(400).json({ error: 'all fields are required' });
  }

  try {
    if (new Date(vaccination_date) > new Date()) {
      return res.status(400).json({ error: 'vaccine date cannot be in the future' });
    }

    // check if previous vaccinations are late and prints 
    const previousVaccinationsAreLate = await vaccinationService.checkVaccinationDates(member_id, vaccination_date);
    if (previousVaccinationsAreLate) {
      message="previous vaccinations dates are later. consider asking the member again about the date";
      console.log(message);
    }

    //create vaccination
    const newVaccin = await vaccinationService.createVaccination(req.body);
    res.status(201).json({newVaccin, message:message});
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ err: error.message });
  }
};

module.exports = {
  getVaccinations,
  unVaccinatedMembersCounter,
  createVaccination
};
