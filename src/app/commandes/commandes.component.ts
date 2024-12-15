import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  tableData: any[] = [];
  editedCommand: any = null;
  cartItems: any[] = []; 

  constructor(private dataService: DataService, private router: Router,private cartService: CartService) {
    this.getCartItems();
  }
  getCartItems() {
    this.cartItems = this.cartService.getCartItems(); 
  }
  ngOnInit() {
    this.loadTableData();
  }

  loadTableData() {
    this.tableData = this.dataService.getData();
  }

  onDelete(index: number) {
    this.dataService.deleteData(index);
    this.loadTableData();
  }

  onEdit(index: number) {
    this.editedCommand = { ...this.tableData[index] }; 
    this.router.navigate(['/enregistrer']); 
  }
  checkPrice(item: any): boolean {
    return item?.price > 7; 
  }
}
