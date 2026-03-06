import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-estacin-5-resultados-y-orientacin-final',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent, FormsModule],
  templateUrl: './estacin-5-resultados-y-orientacin-final.component.html',
  styleUrls: ['./estacin-5-resultados-y-orientacin-final.component.scss']
})
export class Estacin5ResultadosYOrientacinFinalComponent {
  @ViewChild('progressBarStation5', { static: true, read: IgxStepperComponent})
  private progressBarStation5?: IgxStepperComponent;

  public checked = false;

  constructor(
    public router: Router,
  ) {}


  public clickStation5FinishButton(): void {
    this.router.navigate([`/detalle-del-paciente`]);
    this.progressBarStation5?.next();
  }
}
