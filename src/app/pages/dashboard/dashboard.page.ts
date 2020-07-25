import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  screenID:string;
  tabIconEnable: boolean= false;
  iconSelected = "home";

  constructor(
    private apiService: ApiService,
    //private navParams: NavParams
  ) {
    this.screenID = "home";
  }

  ngOnInit() {

  }

  tabChanged(event){
    console.log(event);
  }

  ionViewWillEnter() {
    // this.authService.user().subscribe(
    //   user => {
    //     this.user = user;
    //   }
    // );
  } 
  
  isTabIconActiveShown(){
    return this.tabIconEnable;
  }
  
  userRequestTab(screenID:string){
    this.iconSelected = screenID
    if(this.screenID != screenID){
      this.screenID = screenID;
      this.apiService.userClickStatistic(screenID)
        .subscribe(result => {
          console.log(result);
      },
      error => {
        console.log(error)
      });
    }
  }

  
}
