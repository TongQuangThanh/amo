import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { 
    path: 'landing',
    loadChildren: './pages/landing/landing.module#LandingPageModule'
  },
  { 
    path: 'login/:phone',
    loadChildren: './pages/auth/login/login.module#LoginPageModule'
  },
  { 
    path: 'register-password/:phone/:token/:refCode',
    loadChildren: './pages/auth/register-password/register-password.module#RegisterPasswordPageModule'
  },
  { 
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'forgot-password',
    loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  { 
    path: 'new-password/:phone/:token',
    loadChildren: './pages/new-password/new-password.module#NewPasswordPageModule'
  },
  { 
    path: 'pincode-password',
    loadChildren: './pages/pincode-password/pincode-password.module#PincodePasswordPageModule'
  },
  { 
    path: 'notificationDetail/:id',
    loadChildren: './pages/notification-detail/notification-detail.module#NotificationDetailPageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'notificationComment/:id',
    loadChildren: './pages/notification-comment/notification-comment.module#NotificationCommentPageModule',
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
    canActivate: [AuthGuard]
  },
  { 
    path: 'paymentComment/:id',
    loadChildren: './pages/payment-comment/payment-comment.module#PaymentCommentPageModule',
    canActivate: [AuthGuard]
  },
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
  { 
    path: 'change-password',
    loadChildren: './pages/change-password/change-password.module#ChangePasswordPageModule',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
