import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoPage } from '../aluno/aluno.page';
import { CoordenadorPage } from '../coordenador/coordenador.page';
import { ProfessorPage } from '../professor/professor.page';
import { HomePage } from './home.page';

const routes: Routes = [
    {path: '', component: HomePage},
    {path: '/coordenador', component: CoordenadorPage},
    {path: '/aluno', component: AlunoPage},
    {path: '/professor', component: ProfessorPage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
