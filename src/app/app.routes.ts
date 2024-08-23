import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { CartPageComponent } from './components/check-out/cart-page/cart-page.component';
import { AddressPageComponent } from './components/check-out/address-page/address-page.component';
import { OrderConfirmationPageComponent } from './components/check-out/order-confirmation-page/order-confirmation-page.component';
import { PaymentPageComponent } from './components/check-out/payment-page/payment-page.component';

export const routes: Routes = [
    // { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    {path : 'sign-up', component : SignupPageComponent},
    {path : 'cart', component : CartPageComponent},
    {path : 'address', component : AddressPageComponent},
    {path : 'order', component : OrderConfirmationPageComponent},
    {path : 'payment', component : PaymentPageComponent},
];
