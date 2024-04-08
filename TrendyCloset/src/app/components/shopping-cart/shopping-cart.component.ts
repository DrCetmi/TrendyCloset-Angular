import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  providers: [ProductService]
})
export class ShoppingCartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private productService: ProductService,
    private router: Router) {}

    ngOnInit(): void {
      if (typeof localStorage !== 'undefined') {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
          this.cartItems = JSON.parse(storedCartItems);
        }
      } else {
        this.cartItems = this.productService.getCartItems();
      }
    }
    removeFromCart(index: number): void {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
    clearCart(): void {
      this.cartItems = [];
      localStorage.removeItem('cartItems');
    }
    calculateSubtotal(): number {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
    calculateTax(): number {
      const tax = this.calculateSubtotal() * 0.1;
      return Number(tax.toFixed(2));
    }
    
    calculateTotal(): number {
      return this.calculateSubtotal() + this.calculateTax();
    }
    goToCheckout(): void {
      this.router.navigate(['/checkout'], { state: { cartItems: this.cartItems, total: this.calculateTotal() } });
    }
    
    goToProducts(): void {
      this.router.navigate(['/products']);
    }
}



