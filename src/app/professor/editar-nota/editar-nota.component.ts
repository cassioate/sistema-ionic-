import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from 'src/app/aluno/aluno.service';
import Aluno from 'src/app/core/model/Aluno';
import Materia from 'src/app/core/model/Materia';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.scss'],
})
export class EditarNotaComponent implements OnInit {

  aluno = new Aluno(null,null,null,null);
  materia = '';

  constructor(
    private alunosService: AlunoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.carregarAluno();
    this.materia = this.route.snapshot.params.materia;
  }

  atualizarNota(aluno: Aluno){
    return this.alunosService.editAluno(aluno).subscribe();
  }

  carregarAluno(){
    return this.alunosService.getAlunoId(this.route.snapshot.params.id).subscribe((response: Aluno) => {
      this.aluno = response;
      }
    );
  }
}
