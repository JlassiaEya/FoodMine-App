import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms'; // Importez le module ReactiveFormsModule

import { EnregistrerComponent } from './enregistrer.component';

describe('EnregistrerComponent', () => {
  let component: EnregistrerComponent;
  let fixture: ComponentFixture<EnregistrerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnregistrerComponent],
      imports: [ReactiveFormsModule] // Utilisez ReactiveFormsModule pour tester les formulaires réactifs
    });
    fixture = TestBed.createComponent(EnregistrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
