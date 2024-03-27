const vaccinationService = require('../services/vaccinationService');

const getVaccinations =  async (req, res) => {
    try {
     
      const vaccinations= await vaccinationService.getVaccinations();
      res.json(vaccinations);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
}

const unVaccinatedMembersCounter = async (req,res)=>{
    try{
        const unVaccinatedCount=await vaccinationService.unVaccinatedMembersCounter();
        res.json(unVaccinatedCount);

    }catch (error){

    }
}
const createVaccination = async (req, res) => {
  console.log("in craete vaccin");
  try {
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