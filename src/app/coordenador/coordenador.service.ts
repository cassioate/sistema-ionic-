import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Materia from '../core/model/Materia';
import Aluno from '../core/model/Aluno';
import Professor from '../core/model/Professor';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {

  private urlMateria = 'https://back-sistema-cadastro.herokuapp.com/materia';
  private urlAluno = 'https://back-sistema-cadastro.herokuapp.com/aluno';
  private urlProfessor = 'https://back-sistema-cadastro.herokuapp.com/professor';

  constructor(
    private httpClient: HttpClient
  ) { }

  getMaterias(){
    return this.httpClient.get(this.urlMateria);
  }

  postMateria(materia: Materia){
    return this.httpClient.post(this.urlMateria, materia);
  }

  getAlunos(){
    return this.httpClient.get(this.urlAluno);
  }

  postAluno(aluno: Aluno){
    return this.httpClient.post(this.urlAluno, aluno);
  }

  getProfessor(){
    return this.httpClient.get(this.urlProfessor);
  }

  postProfessor(professor: Professor){
    return this.httpClient.post(this.urlProfessor, professor);
  }

}
