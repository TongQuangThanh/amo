import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { NotificationPollPageRoutingModule } from './notification-poll-routing.module';

import { NotificationPollPage } from './notification-poll.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    NotificationPollPageRoutingModule
  ],
  declarations: [NotificationPollPage]
})
export class NotificationPollPageModule {}
