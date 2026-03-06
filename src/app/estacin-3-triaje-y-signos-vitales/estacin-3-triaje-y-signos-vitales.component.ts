import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-estacin-3-triaje-y-signos-vitales',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxIconComponent, FormsModule],
  templateUrl: './estacin-3-triaje-y-signos-vitales.component.html',
  styleUrls: ['./estacin-3-triaje-y-signos-vitales.component.scss']
})
export class Estacin3TriajeYSignosVitalesComponent {
  @ViewChild('progressBarStation3', { static: true, read: IgxStepperComponent})
  private progressBarStation3?: IgxStepperComponent;

  public value?: string;
  public value1 = 0;
  public value2 = 0;
  public value3 = 0;

  constructor(
    public router: Router,
  ) {}


  public clickStation3NextButton(): void {
    this.progressBarStation3?.next();
    this.router.navigate([`/estacin-4-evaluacin-mdica-especializada`]);
  }

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
