import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../../translate-config.service';

@Component({
  selector: 'app-add-home-vehicle',
  templateUrl: './add-home-vehicle.page.html',
  styleUrls: ['./add-home-vehicle.page.scss'],
})
export class AddHomeVehiclePage implements OnInit {
  selectedLanguage:string;

  constructor(
    private translateConfigService: TranslateConfigService,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }
  ngOnInit() {
  }

}
