import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';
import { Estacin3TriajeYSignosVitalesComponent } from './estacin-3-triaje-y-signos-vitales.component';

describe('Estacin3TriajeYSignosVitalesComponent', () => {
  let component: Estacin3TriajeYSignosVitalesComponent;
  let fixture: ComponentFixture<Estacin3TriajeYSignosVitalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacin3TriajeYSignosVitalesComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxButtonDirective, IgxIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacin3TriajeYSignosVitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
