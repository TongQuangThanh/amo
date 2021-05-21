import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { OrderServiceSuccessPageRoutingModule } from './order-service-success-routing.module';
import { OrderServiceSuccessPage } from './order-service-success.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    OrderServiceSuccessPageRoutingModule
  ],
  declarations: [OrderServiceSuccessPage]
})
export class OrderServiceSuccessPageModule {}
