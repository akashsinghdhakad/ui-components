import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';

export const routes: Routes = [
    // { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    {path : 'sign-up', component : SignupPageComponent}
];
