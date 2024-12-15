import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { CartItem } from '../shared/model/CartItem';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-enregistrer',
  templateUrl: './enregistrer.component.html',
  styleUrls: ['./enregistrer.component.css']
})
export class EnregistrerComponent implements OnInit {
   
  editedCommand: any = null;

  registerForm !: FormGroup;
  submitted = false;
  cartItems: CartItem[] = [];
  frais: number = 7.000;
  soustotal: number = 0.000;
  total: number = 0.000;
  showConfirmation = false;
  tableData: any[] = []; 

  constructor(private formBuilder: FormBuilder, private cart: CartService ,private router: Router,
    private dataService: DataService ) {} 
    
  calculateSubtotal(cartItems: CartItem[]): number {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.food.price * item.quantity;
    });
    return subtotal;
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      telephone: ['', Validators.required,Validators.pattern('[0-9]{8}')],
      adresse: ['', Validators.required], 
      cb: ['', Validators.required,Validators.pattern('[0-9]{12}')]
    });
    this.cartItems = this.cart.getItemsFromCart(); 
    this.soustotal = this.calculateSubtotal(this.cartItems);
    this.total = this.soustotal + this.frais;
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
  
    if (this.registerForm.invalid) {
      return;
    }
  
    const formData = this.registerForm.value;
    const commandData = {
      commandName: 'Nom_de_la_commande', 
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      adresse: formData.adresse,
      telephone: formData.telephone,
      cb: formData.cb,
      totalPrice: this.total.toFixed(2) 
    };
  
    this.tableData.push(commandData);
  
  
    this.dataService.addData(commandData);
  
    this.showConfirmation = true;
    this.registerForm.reset();
    this.submitted = false;
  }
  

  onReset() {
    this.submitted = false;
    this.showConfirmation = false;
    this.registerForm.reset();
  }
}
