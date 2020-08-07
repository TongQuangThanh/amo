import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
import { AlertService } from '../../services/alert/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
  errorMessage:string = "";
  errorOldPass:Boolean = false;
  errorNewPass:Boolean = false;
  errorConfirmPass:Boolean = false;

  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  checkIsEnabled() {
    if (this.oldPassword && this.newPassword.length >= 8 && this.newPassword && this.newPassword.length >= 8 && this.confirmPassword && this.confirmPassword.length >= 8) {
      return true;
    }
    return false;
  }

  updateAccount(){
    var self = this;
    const params = {
      oldPassword: self.oldPassword,
      newPassword: self.newPassword
    };
    this.loading.present();
    this.apiService.changePassword(params)
      .subscribe(result => {
        self.loading.dismiss()
        if(result.message != "SUCCESS"){
          self.errorOldPass = false;
          self.errorNewPass = false;
          self.errorConfirmPass = false;
          self.errorMessage = result.message;
        }else{
          self.errorMessage = "";
          self.oldPassword = "";
          self.newPassword = "";
          self.confirmPassword = "";
          self.errorOldPass = false;
          self.errorNewPass = false;
          self.errorConfirmPass = false;
          self.alertService.presentToast(this.translate.instant('CHANGE_PASSWORD.message_change_pass_sucess'));
        }
    },
    error => {
      self.loading.dismiss();
      self.errorOldPass = false;
      self.errorNewPass = false;
      self.errorConfirmPass = false;
      self.errorMessage = error.error.message;
    });
  }

  changePass(){
    if(!this.oldPassword || this.oldPassword.length < 8){
      this.errorOldPass = true;
      this.errorNewPass = false;
      this.errorConfirmPass = false;
      this.errorMessage = "Please enter current password at least 8 character";
      return;
    }

    if(!this.newPassword || this.newPassword.length < 8){
      this.errorOldPass = false;
      this.errorNewPass = true;
      this.errorConfirmPass = false;
      this.errorMessage = "Please enter new password at least 8 character";
      return;
    }

    if(!this.confirmPassword || this.confirmPassword.length < 8){
      this.errorOldPass = false;
      this.errorNewPass = false;
      this.errorConfirmPass = true;
      this.errorMessage = "Please enter confirm password at least 8 character";
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
