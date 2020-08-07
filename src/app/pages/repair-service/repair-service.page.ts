import { Component, OnInit, ViewChild  } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { ApiService } from '../../services/api/api.service';
import { ActionSheetController, NavController, IonContent  } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-repair-service',
  templateUrl: './repair-service.page.html',
  styleUrls: ['./repair-service.page.scss'],
})
export class RepairServicePage implements OnInit {

  constructor(
    public modalController: ModalController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private loading: LoadingService,
    private navCtrl: NavController,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }
  getListApartment(){
    
  }
  moveRepairServiceDetailPage() {
    this.navCtrl.navigateForward('/repair-service-detail');
  }
}
