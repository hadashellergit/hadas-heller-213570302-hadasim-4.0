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
    //required field validation
    if(!req.body.positive_test_date){
      throw new Error("no positive test date")
    }
    //formting the string to dates to assist validation 
    const positiveTestDate = req.body.positive_test_date ? new Date(req.body.positive_test_date) : null;
    const recoveryDate = req.body.recovery_date ? new Date(req.body.recovery_date) : null;
    const currentDate = new Date();
    //date validation
    if (
      ( positiveTestDate > currentDate) ||
      (recoveryDate!=null && recoveryDate > currentDate) ||
      (recoveryDate!=null && recoveryDate < positiveTestDate)
    ) {
      throw new Error("dates are invalid or don't make sense");
    }
   
    //send the request body to service to post corona event
    const newCoronaEv = await coronaService.createCoronaEvent(req.body);
    res.status(201).json(newCoronaEv);
    
  }catch(error){
    console.error('error creating or updating corona event:', error);
    res.status(500).json({ error: 'internal server error' });
  }
}



module.exports = {
  getCoronaData,
  createCoronaEvent ,
  getCoronaChartData
  };