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

  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuard]},
  // { path: 'payment', loadChildren: './pages/payment/payment.module#PaymentPageModule', canActivate: [AuthGuard]},
  { 
    path: 'notificationDetail/:id',
    loadChildren: './pages/notification-detail/notification-detail.module#NotificationDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'service-list-by-category/:id',
    loadChildren: './pages/service-list-by-category/service-list-by-category.module#ServiceListByCategoryPageModule',
    canActivate: [AuthGuard] 
  },
  { 
    path: 'new-detail/:id',
    loadChildren: './pages/new-detail/new-detail.module#NewDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'payment-infor/:id',
    loadChildren: './pages/payment-infor/payment-infor.module#PaymentInforPageModule',
    canActivate: [AuthGuard]},
  { 
    path: 'request-detail/:id',
    loadChildren: './pages/request-detail/request-detail.module#RequestDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'service-detail/:id',
    loadChildren: './pages/service-detail/service-detail.module#ServiceDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'order-service/:id',
    loadChildren: './pages/order-service/order-service.module#OrderServicePageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'add-request',
    loadChildren: './pages/add-request/add-request.module#AddRequestPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'bill-payment/:id',
    loadChildren: './pages/bill-payment/bill-payment.module#BillPaymentPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-home',
    loadChildren: './pages/my-home/my-home.module#MyHomePageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-home-detail/:id',
    loadChildren: './pages/my-home-detail/my-home-detail.module#MyHomeDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-account',
    loadChildren: './pages/my-account/my-account.module#MyAccountPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'setting',
    loadChildren: './pages/setting/setting.module#SettingPageModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
