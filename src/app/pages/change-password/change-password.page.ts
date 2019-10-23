import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../../services/loading/loading.service';
import { UtilsService } from '../../utils/utils.service';
// import { ConstService } from '../../utils/const.service';
import { AlertService } from '../../services/alert/alert.service';

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
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
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
        if(result.message != ""){
          self.errorOldPass = false;
          self.errorNewPass = false;
          self.errorConfirmPass = false;
          self.errorMessage = result.message;
        }else{
          this.errorMessage = "";
          self.alertService.presentToast("update successfully");
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
    if(!this.oldPassword || this.oldPassword == ""){
      this.errorOldPass = true;
      this.errorNewPass = false;
      this.errorConfirmPass = false;
      this.errorMessage = "Please enter current password";
      return;
    }

    if(!this.newPassword || this.newPassword == ""){
      this.errorOldPass = false;
      this.errorNewPass = true;
      this.errorConfirmPass = false;
      this.errorMessage = "Please new password";
      return;
    }

    if(!this.confirmPassword || this.confirmPassword == ""){
      this.errorOldPass = false;
      this.errorNewPass = false;
      this.errorConfirmPass = true;
      this.errorMessage = "Please confirm password";
      return;
    }

    if(this.newPassword != this.confirmPassword){
      this.errorNewPass = true;
      this.errorConfirmPass = true;
      this.errorMessage = "Password does not match";
      return;
    }

    this.updateAccount();
  }

}
