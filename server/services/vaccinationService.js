const vaccination = require('../models/vaccinationModel');


//GET
const getVaccinations = async () => {
    return await vaccination.find();
  };

 const unVaccinatedMembersCounter =async ()=>{
    return await vaccination.findUnVaccinatedCount();
  }

//POST
const createVaccination = async (vaccinData) => {
  return await vaccination.create(vaccinData);
};



module.exports = {
    getVaccinations,
    unVaccinatedMembersCounter,
    createVaccination
};