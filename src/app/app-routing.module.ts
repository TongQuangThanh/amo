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
    loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingPageModule)
  },
  { 
    path: 'login/:phone',
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
  },
  { 
    path: 'register-password/:phone/:token/:refCode',
    loadChildren: () => import('./pages/auth/register-password/register-password.module').then(m => m.RegisterPasswordPageModule)
  },
  { 
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  { 
    path: 'new-password/:phone/:token',
    loadChildren: () => import('./pages/new-password/new-password.module').then(m => m.NewPasswordPageModule)
  },
  { 
    path: 'pincode-password',
    loadChildren: () => import('./pages/pincode-password/pincode-password.module').then(m => m.PincodePasswordPageModule)
  },
  { 
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'notification-detail/:id',
    loadChildren: () => import('./pages/notification-detail/notification-detail.module').then(m => m.NotificationDetailPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'notification-comment/:id',
    loadChildren: () => import('./pages/notification-comment/notification-comment.module').then(m => m.NotificationCommentPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'service-list-by-category/:id',
    loadChildren: () => import('./pages/service-list-by-category/service-list-by-category.module').then(m => m.ServiceListByCategoryPageModule),
    canActivate: [AuthGuard] 
  },
  { 
    path: 'new-detail/:id',
    loadChildren: () => import('./pages/new-detail/new-detail.module').then(m => m.NewDetailPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'payment-infor/:id',
    loadChildren: () => import('./pages/payment-infor/payment-infor.module').then(m => m.PaymentInforPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'payment-comment/:id',
    loadChildren: () => import('./pages/payment-comment/payment-comment.module').then(m => m.PaymentCommentPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'request-detail/:id',
    loadChildren: () => import('./pages/request-detail/request-detail.module').then(m => m.RequestDetailPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'service-detail/:id',
    loadChildren: () => import('./pages/service-detail/service-detail.module').then(m => m.ServiceDetailPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'order-service/:id',
    loadChildren: () => import('./pages/order-service/order-service.module').then(m => m.OrderServicePageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'add-request',
    loadChildren: () => import('./pages/add-request/add-request.module').then(m => m.AddRequestPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'bill-payment/:id',
    loadChildren: () => import('./pages/bill-payment/bill-payment.module').then(m => m.BillPaymentPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-home',
    loadChildren: () => import('./pages/my-home/my-home.module').then(m => m.MyHomePageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-home-detail/:id',
    loadChildren: () => import('./pages/my-home-detail/my-home-detail.module').then(m => m.MyHomeDetailPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'my-account',
    loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule),
    canActivate: [AuthGuard]
  },
  { 
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
