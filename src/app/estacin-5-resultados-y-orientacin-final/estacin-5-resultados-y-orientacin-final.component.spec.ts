import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_STEPPER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent } from 'igniteui-angular';
import { Estacin5ResultadosYOrientacinFinalComponent } from './estacin-5-resultados-y-orientacin-final.component';

describe('Estacin5ResultadosYOrientacinFinalComponent', () => {
  let component: Estacin5ResultadosYOrientacinFinalComponent;
  let fixture: ComponentFixture<Estacin5ResultadosYOrientacinFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacin5ResultadosYOrientacinFinalComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_STEPPER_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxCheckboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacin5ResultadosYOrientacinFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
