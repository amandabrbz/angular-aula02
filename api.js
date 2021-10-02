const express = require('express');
const cors = require('cors');

const turmasRouter = require('./api/turmas');

const API_PORT = 3000
const API_PATH = 'api'

const app = express();

app.use(cors());

app.use(`/${API_PATH}/turmas`, turmasRouter);

app.listen(API_PORT, () => {
  console.log(`Iniciando em http://localhost.com/${API_PORT}/${API_PATH}`)
})
