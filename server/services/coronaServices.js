const Corona = require('../models/coronaEventsModel');

//GET
const getCoronaData = async () => {
  return await Corona.find();
};

const getCoronaChartData = async()=>{
    return await Corona.findChartData();
}

const getCoronaEventById = async (id) => {
  return await Corona.findById(id);
};

//POST
const createCoronaEvent = async (coronaEventData) => {
return await Corona.create(coronaEventData);
  
};

module.exports = {
     getCoronaData,
     createCoronaEvent,
     getCoronaEventById,
    getCoronaChartData
};