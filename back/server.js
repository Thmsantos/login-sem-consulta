const express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser')
const loginRoutes = require('./src/routes/index')
const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);

const port = 1234;
app.listen(port, () => {
    console.log('Servidor escutando em http://localhost:1234')
});