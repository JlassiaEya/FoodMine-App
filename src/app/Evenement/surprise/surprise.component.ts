import { Component } from '@angular/core';

@Component({
  selector: 'app-surprise',
  templateUrl: './surprise.component.html',
  styleUrls: ['./surprise.component.css']
})
export class SurpriseComponent {
  surprises: any[] = [];
  selectedLocation: string = ''; // Variable pour stocker le lieu sélectionné
  
  onSubmit(surpriseForm: any): void {
    if (surpriseForm.valid) {
      const newSurprise = { ...surpriseForm.value, location: this.selectedLocation };
      this.surprises.push(newSurprise);
      surpriseForm.resetForm();
    }
  }
}
