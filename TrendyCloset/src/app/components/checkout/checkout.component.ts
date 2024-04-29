import { CommonModule } from '@angular/common';
import { HttpClientModule, withFetch } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products/product.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [ProductService]
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const navigation = history.state;
      if (navigation && navigation.cartItems && navigation.total) {
        this.cartItems = navigation.cartItems;
        this.total = navigation.total;
      }
    });
  }

  goToEnd(): void {
    this.router.navigate(['/the-end']);
  }

}
