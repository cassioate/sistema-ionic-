import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlunoPageRoutingModule } from './aluno-routing.module';

import { AlunoPage } from './aluno.page';
import { AlunoUnicoComponent } from './aluno-unico/aluno-unico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunoPageRoutingModule,
  ],
  declarations: [AlunoPage, AlunoUnicoComponent]
})
export class AlunoPageModule {}
