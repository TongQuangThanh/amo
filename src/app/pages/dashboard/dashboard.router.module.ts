import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'notification',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../notification/notification.module').then(m => m.NotificationPageModule)
          }
        ]
      },
      {
        path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../payment/payment.module').then(m => m.PaymentPageModule)
          }
        ]
      },
      {
        path: 'services',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../services/services.module').then(m => m.ServicesPageModule)
          }
        ]
      },
      {
        path: 'requests',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../requests/requests.module').then(m => m.RequestsPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
