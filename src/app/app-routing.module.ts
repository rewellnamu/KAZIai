import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { LandingComponent } from './features/landing/landing.component';
import { SignupComponent } from './features/auth/signup/signup.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login/:role', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
