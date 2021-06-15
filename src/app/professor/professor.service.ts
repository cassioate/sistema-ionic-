import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Aluno from '../core/model/Aluno';
import Materia from '../core/model/Materia';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private urlMateria = 'https://back-sistema-cadastro.herokuapp.com/materia';


  constructor(
    private httpClient: HttpClient
  ) { }

  getMaterias(){
    return this.httpClient.get(this.urlMateria);
  }


}
