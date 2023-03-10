import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { AddHomePageRoutingModule } from './add-home-routing.module';

import { AddHomePage } from './add-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule,
    AddHomePageRoutingModule
  ],
  declarations: [AddHomePage]
})
export class AddHomePageModule {}
