const Corona = require('../models/coronaEventsModel');

const getCoronaData = async () => {
  return await Corona.find();
};

const getCoronaChartData = async()=>{
    return await Corona.findChartData();
}

const getCoronaEventById = async (id) => {
  return await Corona.findById(id);
};

const createCoronaEvent = async (coronaEventData) => {
return await Corona.create(coronaEventData);
  
};

/*
const createOrUpdateCoronaEvent = async (coronaEventData) => {

  const existingCoronaEvent = await Corona.findById(coronaEventData.member_id);

  if (existingCoronaEvent[0]!=undefined) {
    if(existingCoronaEvent[0].positive_test_date>new Date(coronaEventData.recovery_date)){
      throw new Error('Recovery date cannot be earlier than the positive test date'); 
    }
    return await Corona.update(coronaEventData);
  } else {
    if (new Date(coronaEventData.positive_test_date)>new Date(coronaEventData.recovery_date)){
      console.log("problems");
      throw new Error('Recovery date cannot be earlier than the positive test date'); 
    }
    return await Corona.create(coronaEventData);
  }
};*/


module.exports = {
     getCoronaData,
     createCoronaEvent,
     getCoronaEventById,
    getCoronaChartData
};