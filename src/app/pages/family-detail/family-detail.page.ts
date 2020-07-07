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
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.page.html',
  styleUrls: ['./family-detail.page.scss'],
})
export class FamilyDetailPage implements OnInit {
  displayName: string;
  // phone: string;
  email: string;
  timeOrder: any;
  sex:any;
  nationality: any;
  dateOfBirth: any;
  personalLiscence: any;
  avatar:any;
  phoneNumber: any;
  listCountries:any;


  heightScreen: number;
  // data
  currentPage: number;
  numberRecordOnPage: number;
  apartment: any;
  listVehicle: any;
  vehicleEnable: boolean= false;
  listMembers:any;
  memberEnable: boolean= false;
  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private authService: AuthService,
    private platform: Platform,
    private route: ActivatedRoute,
    private nativePageTransitions: NativePageTransitions) {

    platform.ready().then((readySource) => {
      this.heightScreen = platform.height() - 200 - 44 - 50;
    });
    this.listCountries = ConstService.LIST_COUNTRIES;
   }

   ngOnInit() {
    var self = this;
    const apartmentID = this.route.snapshot.paramMap.get('apartment_id');
    const userID = this.route.snapshot.paramMap.get('user_id');
    if (userID != "0") {
      this.getListUserApar(apartmentID, userID);
    } else {
      self.displayName = "";
      self.email = "";
      self.sex = "";
      self.nationality = "";
      self.dateOfBirth = "";
      self.personalLiscence = "";
      self.phoneNumber = "";
      self.avatar = '../assets/icon/avatar-default.png';
    }
  }
  getListUserApar(apartmentID: string, userID:string){
    var self = this;
    this.loading.present();
    this.apiService.getUserApartment(apartmentID)
      .subscribe(result => {
        self.apartment = result.userApartment;
        self.getDataMember(self.apartment.apartment.members, userID);
        self.loading.dismiss();
    },
    error => {
      self.loading.dismiss();
    });
  }
  getDataMember(listdata: any, userID: string) {
    var self = this;
    listdata.forEach(element => {
      if (element._id == userID) {
        self.displayName = element.name;
        self.email = element.email;
        self.sex = element.gender;
        self.nationality = element.nationality;
        self.dateOfBirth = element.dateOfBirth;
        self.personalLiscence = element.personalLicense;
        self.phoneNumber = element.phone;
        self.avatar = '../assets/icon/avatar-default.png';
      } else {
        element['age'] = "N/A";
      }
    });
    return listdata;
  }


}
