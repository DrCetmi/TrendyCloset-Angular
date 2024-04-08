import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductsComponent } from "../products/products.component";
import { ContactComponent } from "../contact/contact.component";
import { AboutUsComponent } from "../about-us/about-us.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [ProductService],
    imports: [HttpClientModule, CommonModule, RouterModule, RouterLink, ProductsComponent, ContactComponent, AboutUsComponent]
})
export class HomeComponent {

}
