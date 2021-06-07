import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/aluno/aluno.service';
import Aluno from 'src/app/core/model/Aluno';

@Component({
  selector: 'app-materia-escolhida',
  templateUrl: './materia-escolhida.component.html',
  styleUrls: ['./materia-escolhida.component.scss'],
})
export class MateriaEscolhidaComponent implements OnInit {

  alunos: Aluno[] = [];
  materia = '';

  constructor(
    private alunosService: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarAlunosPorMateria();
  }

  carregarAlunosPorMateria(){
    return this.alunosService.getAlunos().subscribe((response: Aluno[]) => {
      response.map( aluno => {
        if (aluno.materia === this.route.snapshot.params.materia) {
        this.alunos.push(aluno);
        }
      }
      );
      this.materia = this.route.snapshot.params.materia;
    });
  }

}
