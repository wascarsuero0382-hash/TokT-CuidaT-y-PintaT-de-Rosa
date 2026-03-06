import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective } from 'igniteui-angular';
import { Estacin1RecepcinYRegistroComponent } from './estacin-1-recepcin-y-registro.component';

describe('Estacin1RecepcinYRegistroComponent', () => {
  let component: Estacin1RecepcinYRegistroComponent;
  let fixture: ComponentFixture<Estacin1RecepcinYRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estacin1RecepcinYRegistroComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_STEPPER_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxCheckboxComponent, IgxButtonDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estacin1RecepcinYRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
