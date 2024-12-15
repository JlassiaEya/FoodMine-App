import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  enregistrerInformationsPersonnelles(data: any): Observable<any> {

    return this.http.post<any>('enregistrer_enregistrerInformationsPersonnelles', data);
  }

  enregistrerInformationsTables(data: any): Observable<any> {

    return this.http.post<any>('enregistrer_enregistrerInformationsTables', data);
  }
}
