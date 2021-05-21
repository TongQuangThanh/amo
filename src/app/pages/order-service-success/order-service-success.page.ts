import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-service-success',
  templateUrl: './order-service-success.page.html',
  styleUrls: ['./order-service-success.page.scss'],
})
export class OrderServiceSuccessPage implements OnInit {

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {}

  goBackHistory() {
    this.navCtrl.navigateForward('/history');
  }

  goBack() {
    this.navCtrl.back();
  }
}
