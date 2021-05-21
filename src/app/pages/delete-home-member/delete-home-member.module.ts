import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DeleteHomeMemberPageRoutingModule } from './delete-home-member-routing.module';

import { DeleteHomeMemberPage } from './delete-home-member.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    DeleteHomeMemberPageRoutingModule
  ],
  declarations: [DeleteHomeMemberPage]
})
export class DeleteHomeMemberPageModule {}
