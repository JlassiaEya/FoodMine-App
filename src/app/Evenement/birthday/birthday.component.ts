import { Component } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent {
  birthdayRecords: any[] = [];

  onSubmit(birthdayForm: any): void {
    if (birthdayForm.valid) {
      const newRecord = { ...birthdayForm.value };
      this.birthdayRecords.push(newRecord);
      birthdayForm.resetForm();
    }
  }
}
