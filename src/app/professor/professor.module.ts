import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfessorPageRoutingModule } from './professor-routing.module';

import { ProfessorPage } from './professor.page';
import { MateriaEscolhidaComponent } from './materia-escolhida/materia-escolhida.component';
import { EditarNotaComponent } from './editar-nota/editar-nota.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessorPageRoutingModule
  ],
  declarations: [ProfessorPage, MateriaEscolhidaComponent, EditarNotaComponent]
})
export class ProfessorPageModule {}
