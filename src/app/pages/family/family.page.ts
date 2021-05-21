import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { ApiService } from '../../services/api/api.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { LoadingService } from '../../services/loading/loading.service';
import { ConstService } from '../../utils/const.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service'
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmModalPage } from '../../components/confirm-modal/confirm-modal.page';
import { ApartmentCodeRegisterPage } from '../auth/apartment-code-register/apartment-code-register.page';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {

  heightScreen: number;
  // data
  currentPage: number;
  numberRecordOnPage: number;
  apartment: any;
  listVehicle: any;
  vehicleEnable: boolean= false;
  listMembers:any;
  apartmentTitle:string;
  memberEnable: boolean= false;
  _apartmentID: any;

  constructor(
    private translate: TranslateService,
    private loading: LoadingService,
    private platform: Platform,
    private alertService: AlertService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions,
    public modalController: ModalController) {

    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 200 - 44 - 50;
    });
  }

  ngOnInit() {
    const apartmentID = this.route.snapshot.paramMap.get('id');
    this._apartmentID = apartmentID;
    this.getListUserApar(apartmentID);
  }
  getListUserApar(apartmentID: string){
    var self = this;
    this.loading.present();
    this.apiService.getUserApartment(apartmentID)
      .subscribe(result => {
        self.apartment = result.userApartment;
        self.listMembers = self.convertData(self.apartment.apartment.members);
        self.loading.dismiss()
    },
    error => {
      self.loading.dismiss();
    });
  }
  convertData(listdata: any) {
    listdata.forEach(element => {
      if (element.dateOfBirth != undefined) {
        var ageDifMs = Date.now() - new Date(element.dateOfBirth).getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        element['age'] = Math.abs(ageDate.getUTCFullYear() - 1970);
      } else {
        element['age'] = "N/A";
      }
    });
    return listdata;
  }
  removeItem() {
  }
  goToFamilyMemberDetail(event) {
    var user_id = "0";
    if (event == '0') {
      user_id = event;
    } else {
      if (event.currentTarget.className.indexOf("item-sliding-active-slide") >= 0) {
        return;
      }
      user_id = event.currentTarget.id;
    }
    this.navCtrl.navigateForward('/family-detail/' + this._apartmentID + "/" + user_id);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ConfirmModalPage,
      componentProps: {
      },
      cssClass: "custom-comfirm-modal"
    });
    return await modal.present();
  }
}


