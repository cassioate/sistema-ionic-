import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoordenadorPageRoutingModule } from './coordenador-routing.module';

import { CoordenadorPage } from './coordenador.page';
import { MateriaComponent } from './materia/materia.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoordenadorPageRoutingModule
  ],
  declarations: [
    CoordenadorPage,
    MateriaComponent,
    AlunoCadastroComponent,
    ProfessorCadastroComponent
  ]
})
export class CoordenadorPageModule {}
