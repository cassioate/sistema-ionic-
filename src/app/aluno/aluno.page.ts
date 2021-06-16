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
    console.log(this.alunosSeparados);
    this.alunosService.getAlunos().subscribe((response: Aluno[]) => {
      this.alunos = response;
      this.alunosSeparados = [];

      this.alunos.map( e => {
      const filter = this.alunosSeparados.filter( element => e.nome === element.nome);
        if (filter.length === 0) {
          this.alunosSeparados.push(e);
        }
      });

      // this.alunos = this.alunosSeparados;

      /** REALIZANDO BUSCA TULIZANDO FOREACH */
      // let achou = false;
      // this.alunos.forEach(e=>{
      //   this.alunosSeparados.forEach(element => {
      //     if (e.nome === element.nome){
      //       achou = true;
      //     }
      //   });

      //   if (!achou) {
      //     this.alunosSeparados.push(e);
      //   } else {
      //     achou = false;
      //   }
      // });

      // this.alunos = this.alunosSeparados;
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
