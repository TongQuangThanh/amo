import { NgModule } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { IonicModule } from '@ionic/angular';

import { MyHomeDetailPage } from './my-home-detail.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: MyHomeDetailPage
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
  declarations: [MyHomeDetailPage],
  providers: [DatePipe]
})
export class MyHomeDetailPageModule {}
