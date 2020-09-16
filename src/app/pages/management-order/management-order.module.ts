import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ManagementOrderPage } from './management-order.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

const routes: Routes = [
  {
    path: '',
    component: ManagementOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    SuperTabsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManagementOrderPage],
  providers: [DatePipe]
})
export class ManagementOrderPageModule {}
