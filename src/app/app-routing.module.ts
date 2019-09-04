import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/auth/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/auth/register/register.module#RegisterPageModule' },

  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'},
  { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },
  // { path: 'services', loadChildren: './pages/services/services.module#ServicesPageModule' },
  // { path: 'requests', loadChildren: './pages/requests/requests.module#RequestsPageModule' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  // { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
