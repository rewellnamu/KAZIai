import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'landing', pathMatch: 'full'},
    {path: 'landing', loadChildren: () => import('./features/landing/landing.component').then(m => m.LandingComponent)},
    {path: 'login', loadChildren: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)},
    {path: 'signup', loadChildren: () => import('./features/auth/signup/signup.component').then(m => m.SignupComponent)}
];
