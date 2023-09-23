import { Component, OnInit, Input } from '@angular/core';
import { IParticipantes } from '../types/IParticipantes';

@Component({
  selector: 'app-mostrar-participantes',
  templateUrl: './mostrar-participantes.component.html',
  styleUrls: ['./mostrar-participantes.component.scss'],
})
export class MostrarParticipantesComponent  implements OnInit {

  @Input()
  public participantes! : IParticipantes;

  constructor() { }


  ngOnInit() {}

}
