import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Aluno from 'src/app/core/model/Aluno';
import Materia from 'src/app/core/model/Materia';
import { CoordenadorService } from '../coordenador.service';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.scss'],
})
export class AlunoCadastroComponent implements OnInit {

  alunos: Aluno[] = []

  newAluno = new Aluno (null,null,null);

  materias: Materia[] = []

  constructor(
    private coordenadorService: CoordenadorService,
    private alert: AlertController
  ) { }

  ngOnInit() {
    this.carregarMaterias();
  }

  carregarMaterias(){
    return this.coordenadorService.getMaterias().subscribe((response: Materia[]) => {
      this.materias = response;
    })
  }

  buscarMaterias() {
    this.coordenadorService.getAlunos().subscribe((response: Aluno[]) =>{
      this.alunos = response;
    })
  }

  saveAluno(){
    this.coordenadorService.postAluno(this.newAluno).subscribe((response) => {
      this.clear()
      this.showAlert()
    });
  }

  clear(){
    this.newAluno = new Aluno(null,null,null);
  }

  async showAlert(){
    this.alert.create({
      header: "Cadastrado com sucesso!"
    }).then(res => res.present())
  }

}
