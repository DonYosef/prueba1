import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantesPageRoutingModule } from './participantes-routing.module';

import { ParticipantesPage } from './participantes.page';
import { ParticipanteActivoComponent } from './participante-activo/participante-activo.component';
import { ParticipanteInactivoComponent } from './participante-inactivo/participante-inactivo.component';
import { MostrarParticipantesComponent } from './mostrar-participantes/mostrar-participantes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantesPageRoutingModule
  ],
  declarations: [ParticipantesPage,
  ParticipanteActivoComponent,
ParticipanteInactivoComponent,
MostrarParticipantesComponent
]
})
export class ParticipantesPageModule {}
