import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../../services/loading/loading.service';
import { UtilsService } from '../../../utils/utils.service';
import { AlertService } from '../../../services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApartmentCodeRegisterPage } from '../apartment-code-register/apartment-code-register.page'

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.page.html',
  styleUrls: ['./register-password.page.scss'],
})
export class RegisterPasswordPage implements OnInit {

  newPassword: string;
  confirmPassword: string;
  phoneNumber: string;
  tokenCode: string;
  errorMessage:string = "";
  errorNewPass:Boolean = false;
  errorConfirmPass:Boolean = false;
  refCode: string;
  constructor(
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    public modalController: ModalController,
  ) { 
    this.phoneNumber = this.route.snapshot.paramMap.get('phone');
    this.tokenCode = this.route.snapshot.paramMap.get('token');
    this.refCode = this.route.snapshot.paramMap.get('refCode');
  }

  ngOnInit() {
  }

  changePass(){
    if(!this.newPassword || this.newPassword.length < 8){
      this.errorNewPass = true;
      this.errorConfirmPass = false;
      this.errorMessage = "Please new password at least 8 character";
      return;
    }

    if(!this.confirmPassword || this.confirmPassword.length < 8){
      this.errorNewPass = false;
      this.errorConfirmPass = true;
      this.errorMessage = "Please confirm password at least 8 character";
      return;
    }

    if(this.newPassword != this.confirmPassword){
      this.errorNewPass = true;
      this.errorConfirmPass = true;
      this.errorMessage = "New password and confirm password does not match";
      return;
    }
    var self = this;
    this.apiService.confirmApartmentCode(this.phoneNumber, this.refCode, this.tokenCode, this.newPassword)
      .subscribe(result => {
        self.loading.dismiss();
        this.navCtrl.navigateRoot('/login/' + this.phoneNumber);
    },
    error => {
      self.loading.dismiss();
    });
  }

}
