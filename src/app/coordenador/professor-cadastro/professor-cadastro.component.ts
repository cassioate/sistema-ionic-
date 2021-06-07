import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Materia from 'src/app/core/model/Materia';
import Professor from 'src/app/core/model/Professor';
import { CoordenadorService } from '../coordenador.service';

@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.scss'],
})
export class ProfessorCadastroComponent implements OnInit {

  professores: Professor[] = [];

  newProfessor = new Professor(null, null, null);

  materias: Materia[] = [];

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
    });
  }

  buscarProfessor() {
    this.coordenadorService.getProfessor().subscribe((response: Professor[]) =>{
      this.professores = response;
    });
  }

  saveProfessor(){
    this.coordenadorService.postProfessor(this.newProfessor).subscribe((response) => {
      this.clear();
      this.showAlert();
    });
  }

  clear(){
    this.newProfessor = new Professor(null,null,null);
  }

  async showAlert(){
    this.alert.create({
      header: 'Cadastrado com sucesso!'
    }).then(res => res.present());
  }

}
