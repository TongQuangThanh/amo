import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { IonTabs, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  screenID: string;
  tabIconEnable: boolean = false;
  iconSelected = 'home';
  serviceSelected = false;
  @ViewChild('tabs', { static: true }) tabs: IonTabs;

  constructor(private apiService: ApiService) {
    this.screenID = 'home';
  }

  ngOnInit() {}

  tabChanged(event) {
    if (event.tab == 'services') {
      this.serviceSelected = true;
    } else {
      this.serviceSelected = false;
    }
  }

  isTabIconActiveShown() {
    return this.tabIconEnable;
  }

  iconTabServiceClick() {
    this.tabs.select('services');
  }

  userRequestTab(screenID: string) {
    this.iconSelected = screenID;
    if (this.screenID != screenID) {
      this.screenID = screenID;
      this.apiService.userClickStatistic(screenID).subscribe(
        (result) => {},
        (error) => {}
      );
    }
  }
}
