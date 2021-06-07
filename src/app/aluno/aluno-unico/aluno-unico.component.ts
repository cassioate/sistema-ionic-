import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Aluno from 'src/app/core/model/Aluno';
import Notas from 'src/app/core/model/Notas';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-aluno-unico',
  templateUrl: './aluno-unico.component.html',
  styleUrls: ['./aluno-unico.component.scss'],
})
export class AlunoUnicoComponent implements OnInit {

  notas: Notas[] = [];

  constructor(
    private alunosService: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarAlunoPorNome();
  }

  carregarAlunoPorNome(){
    return this.alunosService.getAlunos().subscribe((response: Aluno[]) => {
      response.map( a => {
        if(a.nome === this.route.snapshot.params.nome){
          const n = new Notas(a.materia, a.nota);
          this.notas.push(n);
        }
      });
    });

  }
}
