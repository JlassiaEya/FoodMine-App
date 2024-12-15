import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservationt',
  templateUrl: './reservationt.component.html',
  styleUrls: ['./reservationt.component.css']
})
export class ReservationtComponent {
  tableInfoForm!: FormGroup;
  reservations: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tableInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      tableNumber: ['', [Validators.required, Validators.min(1)]],
      chairCount: ['', [Validators.required, Validators.min(1)]],
      tableType: ['', Validators.required],
      reservationDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.tableInfoForm.valid) {
      const reservation = this.tableInfoForm.value;
      reservation.reservationDate = new Date(reservation.reservationDate).toLocaleString();
      this.reservations.push(reservation);
      console.log('Réservation enregistrée :', reservation);
      this.tableInfoForm.reset();
    } else {
      console.log('Le formulaire n\'est pas valide. Veuillez remplir tous les champs correctement.');
    }
  }
}
