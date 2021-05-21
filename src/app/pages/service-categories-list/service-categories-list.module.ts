import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ServiceCategoriesListPage } from './service-categories-list.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceCategoriesListPage
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
  declarations: [ServiceCategoriesListPage]
})
export class ServiceCategoriesListPageModule {}
