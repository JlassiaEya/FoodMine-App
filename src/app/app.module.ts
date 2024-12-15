import { NgModule ,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnregistrerComponent } from './enregistrer/enregistrer.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageComponent } from './message/message.component';
import { CommandesComponent } from './commandes/commandes.component';
import { DataService } from './services/data.service';
import { BirthdayComponent } from './Evenement/birthday/birthday.component';
import { ReservationtComponent } from './Evenement/reservationt/reservationt.component';
import { SurpriseComponent } from './Evenement/surprise/surprise.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, TagsComponent, FoodPageComponent, CartPageComponent, NotFoundComponent, EnregistrerComponent, MessageComponent, CommandesComponent, BirthdayComponent, ReservationtComponent, SurpriseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule,ReactiveFormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
