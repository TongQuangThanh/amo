import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { PopupOwnerRelationshipPageRoutingModule } from './popup-owner-relationship-routing.module';

import { PopupOwnerRelationshipPage } from './popup-owner-relationship.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    PopupOwnerRelationshipPageRoutingModule
  ],
  declarations: [PopupOwnerRelationshipPage]
})
export class PopupOwnerRelationshipPageModule {}
