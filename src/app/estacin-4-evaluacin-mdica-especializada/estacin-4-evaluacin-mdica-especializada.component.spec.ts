import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Estacin4EvaluacinMdicaEspecializadaComponent } from './estacin-4-evaluacin-mdica-especializada.component';

describe('Estacin4EvaluacinMdicaEspecializadaComponent', () => {
  let component: Estacin4EvaluacinMdicaEspecializadaComponent;
  let fixture: ComponentFixture<Estacin4EvaluacinMdicaEspecializadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacin4EvaluacinMdicaEspecializadaComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacin4EvaluacinMdicaEspecializadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
