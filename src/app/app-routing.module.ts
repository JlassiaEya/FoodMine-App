import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { EnregistrerComponent } from './enregistrer/enregistrer.component';
import { MessageComponent } from './message/message.component';
import { CommandesComponent } from './commandes/commandes.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  { path:'enregistrer',component:EnregistrerComponent},
  { path: 'commandes', component: CommandesComponent },
  { path: 'message',component:MessageComponent},
  {
    path: 'Evenement', 
    loadChildren: () => import('./Evenement/evenement-routing.module').then((m) => m.EvenementRoutingModule)
  },
  {
    path: 'Evenement', 
    loadChildren: () => import('./Evenement/evenement-routing.module').then((m) => m.EvenementRoutingModule)
  },
  {
    path: 'Evenement', 
    loadChildren: () => import('./Evenement/evenement-routing.module').then((m) => m.EvenementRoutingModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
