const vaccination = require('../models/vaccinationModel');



const getVaccinations = async () => {
    return await vaccination.find();
  };

  const unVaccinatedMembersCounter =async ()=>{
    return await vaccination.findUnVaccinatedCount();
  }
const createVaccination = async (vaccinData) => {
  console.log("in createvaccin service");
  console.log(vaccinData);
  return await vaccination.create(vaccinData);
};



module.exports = {
    getVaccinations,
    unVaccinatedMembersCounter,
    createVaccination
};