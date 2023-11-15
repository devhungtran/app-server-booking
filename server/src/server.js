const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/db/mongoDB.conect');
const { route } = require('./routes/routes');
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const port = process.env.PORT;

db.connectMongo();


app.use('/', route)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); 