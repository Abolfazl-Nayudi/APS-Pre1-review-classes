require('dotenv').config();
const express = require('express');
const Logger = require('./middleware/logger');
const cors = require('cors');
const connectDB = require('./db/connectDB');

const app = express();
app.use(cors(), Logger, express.json(), express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('todos api');
});

app.use('/todo', require('./routes/todo.routes'));
app.use('/user', require('./routes/user.routes'));

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log('Server is running on port', PORT);
    });
  } catch (error) {
    console.error(error);
  }
};
start();
