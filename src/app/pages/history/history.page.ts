import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  data_history: any;

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.data_history = [
      {
        id_tab: "0",
        title: "Tất cả",
        data: [
          {
            id: "1",
            status: "1",
            text_rate: "4.5",
            title: "Điện tử, điện lạnh - Sửa chữa bảo dưỡng điều hòa",
            money: "75.000 đ",
            avatar: "../assets/images/services/6.png",
            name: "Nguyễn Doãn Vũ",
            role: "CEO",
            code_orders: "68686",
            date_time: "21/07/2020 - 02:14",
          },
          {
            id: "2",
            status: "2",
            text_rate: "4.5",
            title: "Điện tử, điện lạnh - Sửa chữa bảo dưỡng điều hòa",
            money: "75.000 đ",
            avatar: "../assets/images/services/6.png",
            name: "Nguyễn Doãn Vũ",
            role: "CEO",
            code_orders: "68686",
            date_time: "21/07/2020 - 02:14",
          },
          {
            id: "3",
            status: "3",
            text_rate: "4.5",
            title: "Điện tử, điện lạnh - Sửa chữa bảo dưỡng điều hòa",
            money: "75.000 đ",
            avatar: "../assets/images/services/6.png",
            name: "Nguyễn Doãn Vũ",
            role: "CEO",
            code_orders: "68686",
            date_time: "21/07/2020 - 02:14",
          },
        ]
      }
    ]
  }
  getListApartment(){
    // var self = this;
    // this.loading.present();
    // this.apiService.getListUserApartment()
    //   .subscribe(result => {
    //     console.log(result.userApartments);
    //     self.listDepartment = result.userApartments;
    //     self.loading.dismiss()
    // },
    // error => {
    //   self.loading.dismiss();
    // });
  }
  gotoHistoryDetail() {
    this.navCtrl.navigateForward('/history-detail');
  }
}
