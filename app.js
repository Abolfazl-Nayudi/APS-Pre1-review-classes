require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { router } = require('./routes/user.route');
const { logger } = require('./middleware/logger');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

console.log(process.env.PASSWORD);

app.use('/', router);

app.get('/', (req, res) => {
  res.send('home page');
});

app.get('*', (req, res) => {
  res.send('page not found');
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
