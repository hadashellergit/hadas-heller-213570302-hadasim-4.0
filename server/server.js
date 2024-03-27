const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//used for the img upload
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/api/member/', require('./routes/memberRoute'));
app.use('/api/vaccinations/', require('./routes/vaccinationRoute'));
app.use('/api/corona', require('./routes/coronaEventsRoute'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
