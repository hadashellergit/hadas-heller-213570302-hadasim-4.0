const coronaService = require('../services/coronaServices');

//GET
const getCoronaData = async (req, res) => {
  try {
   
    const coronaEvents = await coronaService.getCoronaData();
    res.json(coronaEvents);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getCoronaChartData = async (req, res) => {
  try {
    const chartData = await coronaService.getCoronaChartData();
    res.json(chartData);
  } catch (error) {
    console.error('Error fetching sick patients data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//POST
const createCoronaEvent = async (req,res)=>{
  try{
    console.log(req.body.positive_test_date);
    console.log(req.body.recovery_date);
    if(!req.body.positive_test_date){
      throw new Error("no positive test date")
    }
    if(req.body.recovery_date !=null&&new Date(req.body.recovery_date) < new Date(req.body.positive_test_date)){
        throw new Error("recovery date doesn't make sense");
     
    }
    const newCoronaEv = await coronaService.createCoronaEvent(req.body);
    res.status(201).json(newCoronaEv);
    
  }catch(error){
    console.error('Error creating or updating corona event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
/*
const createOrUpdateCoronaEvent   = async (req, res) => {
  console.log("in cec");
  try {
    const { member_id, positive_test_date, recovery_date } = req.body;

    //get event by id if event exist (id+ptd+null||id+pts+rd)
    const existingCoronaEvent = await coronaService.getCoronaEventById(member_id);
    console.log(existingCoronaEvent[0]);
    //if the recovery field is empty
    if (positive_test_date && !recovery_date) {
      console.log("rfie");
      // the recovery field is empty and there is no event already
      if (existingCoronaEvent[0]==undefined) {
        console.log("no event already");
        await coronaService.createCoronaEvent({ member_id, positive_test_date });     
      }
      else{
        console.log("going to send an error");
        throw new Error('positive test date already exist')
      }
    //if positive field is empty
    } else if (!positive_test_date && recovery_date) {
      console.log("pfie");
      // the positive field is emty and there is positive test date
      if (existingCoronaEvent[0]!=undefined) {
        console.log("ptde");
        //update the corona event with recovery date *^check if dates are correct in service^*
        await coronaService.createOrUpdateCoronaEvent({ member_id, recovery_date });
      }
      else{
        console.log("ierroec");
        throw new Error('no positive test date for this member')
      }
    } else if (positive_test_date && recovery_date&&!existingCoronaEvent[0].recovery_date) {
      // positive test date and recovery date (not checking id exist because id is pk, will throw sql erroe any way)
      await coronaService.createOrUpdateCoronaEvent({ member_id, positive_test_date, recovery_date });
    }

    res.status(200).json({ message: 'Corona event created or updated successfully' });
  } catch (error) {
    console.error('Error creating or updating corona event:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};*/

module.exports = {
  getCoronaData,
  createCoronaEvent ,
  getCoronaChartData
  };