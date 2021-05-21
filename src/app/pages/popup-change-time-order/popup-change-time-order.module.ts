import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupChangeTimeOrderPageRoutingModule } from './popup-change-time-order-routing.module';
import { PopupChangeTimeOrderPage } from './popup-change-time-order.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, PopupChangeTimeOrderPageRoutingModule],
  declarations: [PopupChangeTimeOrderPage],
})
export class PopupChangeTimeOrderPageModule {}
