import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Materia from 'src/app/core/model/Materia';
import { CoordenadorService } from '../coordenador.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss'],
})
export class MateriaComponent implements OnInit {

  materias: Materia[] = [];

  newMateria = new Materia(null,null,null,null);

  constructor(
    private coordenadorService: CoordenadorService,
    private alert: AlertController
  ) { }

  ngOnInit() {}

  buscarMaterias() {
    this.coordenadorService.getMaterias().subscribe((response: Materia[]) =>{
      this.materias = response;
    });
  }

  saveMateria(){
    this.coordenadorService.postMateria(this.newMateria).subscribe(() => {
      this.clear();
      this.showAlert();
    });
  }

  clear(){
    this.newMateria = new Materia(null,null,null,null);
  }

  async showAlert(){
    this.alert.create({
      header: 'Cadastrado com sucesso!'
    }).then(res => res.present());
  }

}
