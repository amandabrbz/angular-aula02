import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Turma } from '../models/turma'
import { Aluno } from '../models/aluno'
import { Disciplina } from '../models/disciplina'

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
@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor() {

  }

  public get(): Observable<Turma[]> {
    return of(TURMAS).pipe(
      map(turmasRaw => turmasRaw.map(
        turmaRaw => new Turma (
          new Disciplina (
            turmaRaw.disciplina.codigo,
            turmaRaw.disciplina.nome
          ),
          turmaRaw.ano,
          turmaRaw.periodo,
          turmaRaw.alunos.map(raw => new Aluno (
            raw.codigo,
            raw.nome,
          )),
        )
      )),
    );
  }
}
