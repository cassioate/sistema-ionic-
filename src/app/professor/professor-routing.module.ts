import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaComponent } from '../coordenador/materia/materia.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';
import { MateriaEscolhidaComponent } from './materia-escolhida/materia-escolhida.component';

import { ProfessorPage } from './professor.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessorPage
  },
  {
    path: 'materia-escolhida/:materia',
    component: MateriaEscolhidaComponent
  },
  {
    path: 'aluno-editar-nota/:id/:materia',
    component: EditarNotaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorPageRoutingModule {}
