const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const loginRoutes = require('./src/routes/index')
const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);

const port = 1234;
app.listen(port, () => {
    console.log('Servidor escutando em http://localhost:1234')
});