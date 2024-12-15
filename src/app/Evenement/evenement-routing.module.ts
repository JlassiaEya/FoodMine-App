import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import { ReservationtComponent } from './reservationt/reservationt.component';
import { SurpriseComponent } from './surprise/surprise.component';

const routes: Routes = [
  { path: 'Surprise', component:  SurpriseComponent},
  { path: 'birthday', component: BirthdayComponent },
  { path: 'Res', component:  ReservationtComponent},
  
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
