import { Component, OnInit } from '@angular/core';
import Materia from '../core/model/Materia';
import { ProfessorService } from './professor.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {


  materias: Materia[] = [];

  constructor(
    private professorService: ProfessorService
  ) { }

  ngOnInit() {
    this.carregarMaterias();
  }

  carregarMaterias(){
    return this.professorService.getMaterias().subscribe((response: Materia[]) => {
      this.materias = response;
    });
  }

}
