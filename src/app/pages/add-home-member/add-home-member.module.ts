import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AddHomeMemberPageRoutingModule } from './add-home-member-routing.module';

import { AddHomeMemberPage } from './add-home-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    AddHomeMemberPageRoutingModule
  ],
  declarations: [AddHomeMemberPage]
})
export class AddHomeMemberPageModule {}
