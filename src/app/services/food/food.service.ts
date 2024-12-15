import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/model/Food';
import { Tag } from 'src/app/shared/model/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodById(id: number): Food {
    return this.getAll().find((food) => food.id == id)!;
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 12 }, 
       { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
      { name: 'Cake', count: 3 },
      { name: 'Boisson', count: 3 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 17,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
       {
         id: 2,
         name: 'Meatball',
         price: 20,
         cookTime: '20-30',
         favorite: true,
         origins: ['persia', 'middle east', 'china'],
         stars: 4.7,
         imageUrl: '/assets/images/foods/food-2.jpg',
         tags: ['SlowFood', 'Lunch'],
       },
      {
        id: 3,
        name: 'Hamburger',
        price: 8.5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 12,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Cake',
        price: 50,
        cookTime: '50-60',
        favorite: true,
        origins: ['France'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['Dolce', 'Cake', 'Dolce'],
      },
      {
        id: 8,
        name: 'Choclate Cake',
        price: 50,
        cookTime: '50-60',
        favorite: true,
        origins: ['France'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-8.jpeg',
        tags: ['Dolce', 'Cake', 'Dolce'],
      },
      {
        id: 9,
        name: 'biscoff cake',
        price: 50,
        cookTime: '50-60',
        favorite: true,
        origins: ['France'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['Dolce', 'Cake', 'Dolce'],
      },
      {
        id: 10,
        name: 'Boisson Apla ',
        price: 7,
        cookTime: '',
        favorite: true,
        origins: ['Tunisie'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/boisson-10.jpeg',
        tags: ['Apla', 'Boisson', 'Dolce'],
      },
      {
        id: 11,
        name: 'Boisson Booga ',
        price: 7,
        cookTime: '',
        favorite: true,
        origins: ['Tunisie'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/boisson-11.jpeg',
        tags: ['Booga', 'Boisson', 'Dolce'],
      },
      {
        id: 12,
        name: 'Boisson Viva ',
        price: 7,
        cookTime: '',
        favorite: true,
        origins: ['Tunisie'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/boisson-12.jpg',
        tags: ['Viva', 'Boisson', 'Dolce'],
      },
      
    ];
  }
}
