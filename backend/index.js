const express = require('express');
const cors = require('cors');
const app = express();
const dogRouter = require('./src/routes/dog-route');
require('./src/db/mongoose');
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/dogs', dogRouter);

app.listen(port, () => console.log(`Server running on port ${port}!`))