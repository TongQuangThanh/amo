import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  newPassword: string;
  confirmPassword: string;
  phoneNumber: string;
  tokenCode: string;
  errorMessage:string = "";
  errorNewPass:Boolean = false;
  errorConfirmPass:Boolean = false;

  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { 
    console.log(111);
    this.phoneNumber = this.route.snapshot.paramMap.get('phone');
    this.tokenCode = this.route.snapshot.paramMap.get('token');
  }

  ngOnInit() {
  }

  updateAccount(){
    var self = this;
    const params = {
      phone: this.phoneNumber,
      token: this.tokenCode,
      newPassword: this.newPassword
    };
    this.loading.present();
    this.apiService.resetPassword(params)
      .subscribe(result => {
        self.loading.dismiss()
        self.errorMessage = "";
        self.errorNewPass = false;
        self.errorConfirmPass = false;
        self.alertService.presentToast(this.translate.instant('NEW_PASSWORD.message_change_pass_sucess'));
        self.navCtrl.navigateBack('/login/' + self.phoneNumber);
    },
    error => {
      self.loading.dismiss();
      self.errorNewPass = false;
      self.errorConfirmPass = false;
      self.errorMessage = error.error.message;
    });
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

    this.updateAccount();
  }
}
