const vaccination = require('../models/vaccinationModel');


//GET
const getVaccinations = async () => {
    return await vaccination.find();
  };

 const unVaccinatedMembersCounter =async ()=>{
    return await vaccination.findUnVaccinatedCount();
  }
const checkVaccinationDates= async(member_id, vaccination_date)=>{
  return await vaccination.checkVaccinationDates(member_id, vaccination_date);
}
//POST
const createVaccination = async (vaccinData) => {
  return await vaccination.create(vaccinData);
};



module.exports = {
    getVaccinations,
    unVaccinatedMembersCounter,
    checkVaccinationDates,
    createVaccination
};
