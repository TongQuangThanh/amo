import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MyHomePage } from './my-home.page';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: MyHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ],
  providers: [CallNumber],
  declarations: [MyHomePage]
})
export class MyHomePageModule {}
