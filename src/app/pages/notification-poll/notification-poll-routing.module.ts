import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { NotificationPollPage } from './notification-poll.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationPollPage
  }
];

@NgModule({
  imports: [
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class NotificationPollPageRoutingModule {}
