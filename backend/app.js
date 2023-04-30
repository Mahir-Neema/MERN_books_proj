const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const bookRoutes = require('./routes/bookRoutes');



const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(cors()); // middleware

const mongoUri = process.env.MONGODB_URI

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(e => console.error(e));

app.use(bookRoutes);
app.set('view engine', 'ejs');

app.listen(port, () => console.log(`Server running on port ${port}`));
