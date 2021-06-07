import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoUnicoComponent } from './aluno-unico/aluno-unico.component';

import { AlunoPage } from './aluno.page';

const routes: Routes = [
  { path: '', component: AlunoPage },
  { path: 'aluno-unico/:nome', component: AlunoUnicoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoPageRoutingModule {}
