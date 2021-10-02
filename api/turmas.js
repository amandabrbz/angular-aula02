const express = require('express');

const router = express.Router()

const TURMAS = [
  {
    "id": "87382",
    "disciplina": {
      "codigo": "121",
      "nome": "Fundamentos Web",
    },
    "ano": 2021,
    "periodo": 1,
    "alunos": [
      {
        "codigo": 1211,
        "nome": "maria"
      },
    ],
  },
  {
    "id": "45656",
    "disciplina": {
      "codigo": "1231d",
      "nome": "Frameworks Web",
    },
    "ano": 2021,
    "periodo": 2,
    "alunos": [
      {
        "codigo": 1211,
        "nome": "maria"
      },
    ],
  },
]

router.get('/', function(req, res, next) {
  res.json([ ...TURMAS ]);
});

module.exports = router;
