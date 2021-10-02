import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Turma } from 'src/app/models/turma';
import { Disciplina } from 'src/app/models/disciplina';
import { Aluno } from 'src/app/models/aluno';
import { TurmaService } from 'src/app/services/turma.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css'],
})
export class ListaTurmasComponent implements OnInit {

  public turmas$: Observable<Turma[]>;

  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();

  constructor(
    private turmaService: TurmaService,
    ) {
      this.turmas$ = this.turmaService.get();
  }

  ngOnInit(): void {
  }

  public selecionaTurma(turma: Turma) {
    this.turmaSelecionada.emit(turma);
  }

}
