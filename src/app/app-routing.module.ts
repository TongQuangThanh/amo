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
  },
  {
    path: 'order-shop-history',
    loadChildren: () => import('./pages/order-shop-history/order-shop-history.module').then( m => m.OrderShopHistoryPageModule)
  },
  {
    path: 'pop-delete-member',
    loadChildren: () => import('./pages/popup-delete-member/popup-delete-member.module').then( m => m.PopupDeleteMemberPageModule)
  },
  {
    path: 'my-account-detail',
    loadChildren: () => import('./pages/my-account-detail/my-account-detail.module').then( m => m.MyAccountDetailPageModule)
  },
  {
    path: 'popup-building-management-phone',
    loadChildren: () => import('./pages/popup-building-management-phone/popup-building-management-phone.module').then( m => m.PopupBuildingManagementPhonePageModule)
  },
  {
    path: 'popup-change-language',
    loadChildren: () => import('./pages/popup-change-language/popup-change-language.module').then( m => m.PopupChangeLanguagePageModule)
  },
  {
    path: 'popup-hotline',
    loadChildren: () => import('./pages/popup-hotline/popup-hotline.module').then( m => m.PopupHotlinePageModule)
  },
  {
    path: 'popup-feedback',
    loadChildren: () => import('./pages/popup-feedback/popup-feedback.module').then( m => m.PopupFeedbackPageModule)
  },
  {
    path: 'popup-logout',
    loadChildren: () => import('./pages/popup-logout/popup-logout.module').then( m => m.PopupLogoutPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'guideline',
    loadChildren: () => import('./pages/guideline/guideline.module').then( m => m.GuidelinePageModule)
  },
  {
    path: 'popup-delete-vehicle',
    loadChildren: () => import('./pages/popup-delete-vehicle/popup-delete-vehicle.module').then( m => m.PopupDeleteVehiclePageModule)
  },
  {
    path: 'add-home',
    loadChildren: () => import('./pages/add-home/add-home.module').then( m => m.AddHomePageModule)
  },
  {
    path: 'add-home-member',
    loadChildren: () => import('./pages/add-home-member/add-home-member.module').then( m => m.AddHomeMemberPageModule)
  },
  {
    path: 'add-home-vehicle',
    loadChildren: () => import('./pages/add-home-vehicle/add-home-vehicle.module').then( m => m.AddHomeVehiclePageModule)
  },
  {
    path: 'reset-apartment-code',
    loadChildren: () => import('./pages/auth/reset-apartment-code/reset-apartment-code.module').then( m => m.ResetApartmentCodePageModule)
  },
  {
    path: 'popup-owner-relationship',
    loadChildren: () => import('./pages/popup-owner-relationship/popup-owner-relationship.module').then( m => m.PopupOwnerRelationshipPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'popup-payment-online',
    loadChildren: () => import('./pages/popup-payment-online/popup-payment-online.module').then( m => m.PopupPaymentOnlinePageModule)
  },
  {
    path: 'popup-payment-transfer',
    loadChildren: () => import('./pages/popup-payment-transfer/popup-payment-transfer.module').then( m => m.PopupPaymentTransferPageModule)
  },
  {
    path: 'popup-payment-cash',
    loadChildren: () => import('./pages/popup-payment-cash/popup-payment-cash.module').then( m => m.PopupPaymentCashPageModule)
  },
  {
    path: 'popup-payment-success',
    loadChildren: () => import('./pages/popup-payment-success/popup-payment-success.module').then( m => m.PopupPaymentSuccessPageModule)
  },
  {
    path: 'popup-registration-type',
    loadChildren: () => import('./pages/popup-registration-type/popup-registration-type.module').then( m => m.PopupRegistrationTypePageModule)
  },
  {
    path: 'popup-select-time',
    loadChildren: () => import('./pages/popup-select-time/popup-select-time.module').then( m => m.PopupSelectTimePageModule)
  },
  {
    path: 'popup-registration-success',
    loadChildren: () => import('./pages/popup-registration-success/popup-registration-success.module').then( m => m.PopupRegistrationSuccessPageModule)
  },
  {
    path: 'registration-guest',
    loadChildren: () => import('./pages/registration-guest/registration-guest.module').then( m => m.RegistrationGuestPageModule)
  },
  {
    path: 'popup-select-apartment',
    loadChildren: () => import('./pages/popup-select-apartment/popup-select-apartment.module').then( m => m.PopupSelectApartmentPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
