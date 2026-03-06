import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-estacin-4-evaluacin-mdica-especializada',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent],
  templateUrl: './estacin-4-evaluacin-mdica-especializada.component.html',
  styleUrls: ['./estacin-4-evaluacin-mdica-especializada.component.scss']
})
export class Estacin4EvaluacinMdicaEspecializadaComponent {
  @ViewChild('progressBarStation4', { static: true, read: IgxStepperComponent})
  private progressBarStation4?: IgxStepperComponent;

  constructor(
    public router: Router,
  ) {}


  public clickStation4NextButton(): void {
    this.router.navigate([`/estacin-5-resultados-y-orientacin-final`]);
    this.progressBarStation4?.next();
  }
}
