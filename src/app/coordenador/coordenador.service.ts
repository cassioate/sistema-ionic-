import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Materia from '../core/model/Materia';
import Aluno from '../core/model/Aluno';
import Professor from '../core/model/Professor';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {

  private urlMateria = 'http://localhost:8080/materia'
  private urlAluno = 'http://localhost:8080/aluno'
  private urlProfessor = 'http://localhost:8080/professor'

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
    return this.httpClient.get(this.urlAluno)
  }

  postAluno(aluno: Aluno){
    return this.httpClient.post(this.urlAluno, aluno);
  }

  getProfessor(){
    return this.httpClient.get(this.urlProfessor)
  }

  postProfessor(professor: Professor){
    return this.httpClient.post(this.urlProfessor, professor);
  }

}
