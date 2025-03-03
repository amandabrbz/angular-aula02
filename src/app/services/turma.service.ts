import { Inject, Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Turma } from '../models/turma'
import { Aluno } from '../models/aluno'
import { Disciplina } from '../models/disciplina'
import { HttpClient } from '@angular/common/http';

import { Turma as ITurma } from '../interfaces/turma'


@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private httpClient: HttpClient,
  ) {

  }

  public get(): Observable<Turma[]> {
    return this.httpClient.get<ITurma[]>(`${this.baseUrl}/turmas`).pipe(
      map(turmasRaw => turmasRaw.map(
        turmaRaw => new Turma (
          new Disciplina (
            turmaRaw.disciplina.codigo,
            turmaRaw.disciplina.nome
          ),
          turmaRaw.ano,
          turmaRaw.periodo,
          turmaRaw.alunos.map((raw: any) => new Aluno (
            raw.codigo,
            raw.nome,
          )),
        )
      )),
    );
  }
}
