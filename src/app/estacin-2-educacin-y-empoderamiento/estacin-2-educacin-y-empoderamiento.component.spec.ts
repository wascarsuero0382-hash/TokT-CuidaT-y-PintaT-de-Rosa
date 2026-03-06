import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_STEPPER_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Estacin2EducacinYEmpoderamientoComponent } from './estacin-2-educacin-y-empoderamiento.component';

describe('Estacin2EducacinYEmpoderamientoComponent', () => {
  let component: Estacin2EducacinYEmpoderamientoComponent;
  let fixture: ComponentFixture<Estacin2EducacinYEmpoderamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacin2EducacinYEmpoderamientoComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_STEPPER_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacin2EducacinYEmpoderamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
