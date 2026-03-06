import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { MduloDeAdministradorComponent } from './mdulo-de-administrador.component';

describe('MduloDeAdministradorComponent', () => {
  let component: MduloDeAdministradorComponent;
  let fixture: ComponentFixture<MduloDeAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MduloDeAdministradorComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IgxButtonDirective, IgxIconComponent, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MduloDeAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
