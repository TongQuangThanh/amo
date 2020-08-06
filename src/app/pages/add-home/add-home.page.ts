import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.page.html',
  styleUrls: ['./add-home.page.scss'],
})
export class AddHomePage implements OnInit {
  selectedLanguage:string;
  activeCode: string;

  constructor(
    private translateConfigService: TranslateConfigService
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

  checkIsEnabled() {
    if (this.activeCode && this.activeCode.length >= 6) {
      return true;
    }
    return false;
  }

}
