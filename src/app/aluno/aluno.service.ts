import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Aluno from '../core/model/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {


  private urlAlunos = 'https://back-sistema-cadastro.herokuapp.com/aluno';
  private urlAluno = 'https://back-sistema-cadastro.herokuapp.com/aluno';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAlunos(){
    return this.httpClient.get(this.urlAlunos);
  }

  getAlunoId(codigo: number){
    return this.httpClient.get<Aluno>(`${this.urlAlunos}/${codigo}`);
  }

  editAluno(aluno: Aluno){
    return this.httpClient.put(`${this.urlAluno}/${aluno.id}`, aluno);
  }

}
