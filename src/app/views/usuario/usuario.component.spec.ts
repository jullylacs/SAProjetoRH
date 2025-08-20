import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioFormComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';

describe('UsuarioFormComponent', () => {
  let component: UsuarioFormComponent;
  let fixture: ComponentFixture<UsuarioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioFormComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(UsuarioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
