import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';

import { CoordenadorPage } from './coordenador.page';
import { MateriaComponent } from './materia/materia.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

const routes: Routes = [
  { path: '', component: CoordenadorPage },
  { path: 'materia', component: MateriaComponent },
  { path: 'aluno-cadastro', component: AlunoCadastroComponent },
  { path: 'professor-cadastro', component: ProfessorCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordenadorPageRoutingModule {}
