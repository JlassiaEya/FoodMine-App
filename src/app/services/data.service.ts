import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localStorageKey = 'commandData';
  private tableData: any[] = [];

  constructor() {
    const storedData = localStorage.getItem(this.localStorageKey);
    if (storedData) {
      this.tableData = JSON.parse(storedData);
    }
  }

  addData(data: any) {
    const currentDate = new Date().toLocaleString(); 
    data.date = currentDate; 

    this.tableData.push(data);
    this.saveToLocalStorage();
  }

  getData() {
    return this.tableData;
  }

  deleteData(index: number) {
    if (index >= 0 && index < this.tableData.length) {
      this.tableData.splice(index, 1);
      this.saveToLocalStorage();
    }
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.tableData));
  }
}
