import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { TheEndComponent } from './components/the-end/the-end.component';




export const routes: Routes = [
    { path: '', component: LayoutsComponent, children: [
        { path: '', component: HomeComponent },
        { path: 'home', component: HomeComponent },
        {path: 'products', component: ProductsComponent},
        {path: 'products/:id', component: ProductDetailComponent},
        { path: 'about-us', component: AboutUsComponent },
        {path: 'contact', component: ContactComponent},
        {path: 'blog', component: BlogComponent},
        {path: 'card', component: ShoppingCartComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path: 'the-end', component: TheEndComponent}
] }
];