import { Component, Input, OnInit } from '@angular/core';
import { IParticipantes } from '../types/IParticipantes';

@Component({
  selector: 'app-participante-inactivo',
  templateUrl: './participante-inactivo.component.html',
  styleUrls: ['./participante-inactivo.component.scss'],
})
export class ParticipanteInactivoComponent  implements OnInit {

  @Input()
  public inactivo: IParticipantes[] = []

  constructor() { }

  ngOnInit() {}

}
