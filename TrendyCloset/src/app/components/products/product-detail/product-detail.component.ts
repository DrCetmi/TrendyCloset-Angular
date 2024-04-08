import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClientRequest } from 'http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
    ) {}

    ngOnInit(): void {
      const productId: any = this.route.snapshot.paramMap.get('id');
      this.productService.getProductById(productId).subscribe((data: any) => {
        const productIndex = parseInt(productId) - 1;
        if (productIndex >= 0 && productIndex < data.products.length) {
          this.product = data.products[productIndex];
        }else {
          console.error('Product not found');
        }
      });
}
getStarArray(rating: number): number[] {
  return Array.from({ length: rating }, (_, index) => index + 1);
}
addToCart(): void {
  this.productService.addToCart(this.product);
  this.router.navigate(['/card']);
}
}

