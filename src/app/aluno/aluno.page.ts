import { Component, OnInit } from '@angular/core';
import Aluno from '../core/model/Aluno';
import { AlunoService } from './aluno.service';

import _ from 'lodash';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  alunos: Aluno[] = [];
  alunosBuscados: Aluno[] = [];
  alunosSeparados: Aluno[] = [];

  constructor(
    private alunosService: AlunoService
  ) { }

  ngOnInit() {
    this.carregarAlunos();
    this.alunosBuscados = this.alunos;
  }

  carregarAlunos(){
    this.alunos = [];
    this.alunosService.getAlunos().subscribe((response: Aluno[]) => {
      this.alunos = response;
      let comparador = '';
      this.alunosSeparados = [];
      this.alunos.forEach(element => {
        if (element.nome !== comparador){
          this.alunosSeparados.push(element);
          comparador = element.nome;
        }
      });
      this.alunos = this.alunosSeparados;
    });
  }

  buscar(event){
    const val = event.target.value;
    if(val && val.trim() !== ''){
      this.alunos = _.values(this.alunos);
      this.alunos = this.alunos.filter((aluno) => (aluno.nome.toLowerCase().indexOf(val.toLowerCase()) > -1));
    } else {
      this.carregarAlunos();
    }
  }

}
