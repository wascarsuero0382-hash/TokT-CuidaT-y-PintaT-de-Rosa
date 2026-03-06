import { Component } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-detalle-del-paciente',
  imports: [IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconComponent],
  templateUrl: './detalle-del-paciente.component.html',
  styleUrls: ['./detalle-del-paciente.component.scss']
})
export class DetalleDelPacienteComponent {}
