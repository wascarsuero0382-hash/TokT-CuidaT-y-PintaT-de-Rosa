import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-estacin-2-educacin-y-empoderamiento',
  imports: [IGX_STEPPER_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './estacin-2-educacin-y-empoderamiento.component.html',
  styleUrls: ['./estacin-2-educacin-y-empoderamiento.component.scss']
})
export class Estacin2EducacinYEmpoderamientoComponent {
  @ViewChild('progressBarStation2', { static: true, read: IgxStepperComponent})
  private progressBarStation2?: IgxStepperComponent;

  public checked = false;
  public checked1 = false;

  constructor(
    public router: Router,
  ) {}


  public clickStation2NextButton(): void {
    this.progressBarStation2?.next();
    this.router.navigate([`/estacin-3-triaje-y-signos-vitales`]);
  }
}
