import { Component, Input, OnInit } from '@angular/core';
import { IParticipantes } from '../types/IParticipantes';

@Component({
  selector: 'app-participante-activo',
  templateUrl: './participante-activo.component.html',
  styleUrls: ['./participante-activo.component.scss'],
})
export class ParticipanteActivoComponent  implements OnInit {

  @Input()
  public activo: IParticipantes[] = []

  constructor() { }

  ngOnInit() {}

}
