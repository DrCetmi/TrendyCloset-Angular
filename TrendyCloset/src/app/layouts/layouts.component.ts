import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.scss',
    imports: [RouterModule, RouterLink, NavbarComponent, FooterComponent]
})
export class LayoutsComponent {

}
