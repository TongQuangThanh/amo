import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
// import { LoginPage } from '../auth/login/login.page';
// import { RegisterPage } from '../auth/register/register.page';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
const routes: Routes = [
  {
    path: '',
    component: LandingPage
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
  declarations: [LandingPage],
  // entryComponents: [LoginPage, RegisterPage]
})
export class LandingPageModule {}
