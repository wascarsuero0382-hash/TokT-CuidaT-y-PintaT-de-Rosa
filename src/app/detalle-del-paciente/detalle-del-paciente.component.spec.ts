import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { DetalleDelPacienteComponent } from './detalle-del-paciente.component';

describe('DetalleDelPacienteComponent', () => {
  let component: DetalleDelPacienteComponent;
  let fixture: ComponentFixture<DetalleDelPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleDelPacienteComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleDelPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
