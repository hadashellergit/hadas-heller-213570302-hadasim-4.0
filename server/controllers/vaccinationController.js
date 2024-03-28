const vaccinationService = require('../services/vaccinationService');

//GET
const getVaccinations =  async (req, res) => {
    try {
      //fetching the vaccination list
      const vaccinations= await vaccinationService.getVaccinations();
      res.json(vaccinations);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}

const unVaccinatedMembersCounter = async (req,res)=>{
    try{
      //fetchinf from services the count of unvaccinated members
      const unVaccinatedCount=await vaccinationService.unVaccinatedMembersCounter();
      res.json(unVaccinatedCount);

    }catch (error){
      res.status(500).json({ error: 'Internal server error' });
    }
}

//POST
const createVaccination = async (req, res) => {
  const { member_id,vaccination_date,vaccination_type} = req.body;

  // required field validation
  if (!member_id||!vaccination_date||!vaccination_type) {
    return res.status(400).json({ error: 'all fields are required' });
  }
  try {
    if (new Date(vaccination_date) > new Date()) {
      return res.status(400).json({ error: 'vaccine date cannot be in the future' });
    }
    const newVaccin = await vaccinationService.createVaccination(req.body);
    res.status(201).json(newVaccin);
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = {
    getVaccinations,
    unVaccinatedMembersCounter,
    createVaccination
  };