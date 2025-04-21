import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./features/landing/landing.component";
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FootComponent } from './shared/foot/foot.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LandingComponent, NavbarComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KAZIai';
}
