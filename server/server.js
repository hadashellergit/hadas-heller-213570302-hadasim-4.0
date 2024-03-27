const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());


// Routes
const memberRoute = require('./routes/memberRoute');
app.use('/api/member/', memberRoute);

const vaccintaionRoute = require('./routes/vaccinationRoute');
app.use('/api/vaccinations/', vaccintaionRoute);

const coronaEventsRoute = require('./routes/coronaEventsRoute');
app.use('/api/corona',coronaEventsRoute);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`nice! Server is running on http://localhost:${PORT}`);
});
