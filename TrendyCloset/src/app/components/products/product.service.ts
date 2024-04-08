import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartItems: any[] = [];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get('/assets/products.json');
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`/assets/products.json?id=${id}`);
  }

  addToCart(product: any): void {
    const storedCartItemsString = localStorage.getItem('cartItems');
    let cartItems: any[] = storedCartItemsString ? JSON.parse(storedCartItemsString) : [];
    cartItems.push(product);
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  removeFromCart(product: any): void {
    const index = this.cartItems.indexOf(product);
    this.cartItems.splice(index, 1);
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
