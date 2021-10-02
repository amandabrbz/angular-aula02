import { Aluno } from "./aluno";

export interface Turma {
  id: string;
  disciplina: {
    codigo: string;
    nome: string;
  }
  ano: number;
  periodo: number;
  alunos: Aluno[];
}
