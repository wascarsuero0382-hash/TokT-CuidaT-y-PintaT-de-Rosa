import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxButtonDirective, IgxCheckboxComponent, IgxStepperComponent } from 'igniteui-angular';

@Component({
  selector: 'app-estacin-1-recepcin-y-registro',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_STEPPER_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, FormsModule],
  templateUrl: './estacin-1-recepcin-y-registro.component.html',
  styleUrls: ['./estacin-1-recepcin-y-registro.component.scss']
})
export class Estacin1RecepcinYRegistroComponent {
  @ViewChild('progressBarStation1', { static: true, read: IgxStepperComponent})
  private progressBarStation1?: IgxStepperComponent;

  public value?: string;
  public value1?: string;
  public value2?: string;
  public value3?: string;
  public value4?: string;
  public checked = false;

  constructor(
    public router: Router,
  ) {}


  public clickStation1NextButton(): void {
    this.router.navigate([`/estacin-2-educacin-y-empoderamiento`]);
    this.progressBarStation1?.next();
  }
}
