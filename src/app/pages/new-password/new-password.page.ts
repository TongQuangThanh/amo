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
  password_type: string = 'password';
  passwordToggleIcon = 'eye-off-outline';
  passwordConfirm_type: string = 'password';
  passwordNewToggleIcon = 'eye-off-outline';

  constructor(
    private translate: TranslateService,
    private alertService: AlertService,
    private loading: LoadingService,
    private apiService: ApiService,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { 
    this.phoneNumber = this.route.snapshot.paramMap.get('phone');
    this.tokenCode = this.route.snapshot.paramMap.get('token');
  }

  ngOnInit() {
  }

  togglePassword(): void {
    //this.showPassword != this.showPassword;
    this.password_type = this.password_type === 'text' ? 'password' : 'text';
    if (this.passwordToggleIcon == 'eye-outline') {
      this.passwordToggleIcon = 'eye-off-outline';
    } else {
      this.passwordToggleIcon = 'eye-outline';
    }
  }

  togglePasswordNew(): void {
    //this.showPassword != this.showPassword;
    this.passwordConfirm_type = this.passwordConfirm_type === 'text' ? 'password' : 'text';
    if (this.passwordNewToggleIcon == 'eye-outline') {
      this.passwordNewToggleIcon = 'eye-off-outline';
    } else {
      this.passwordNewToggleIcon = 'eye-outline';
    }
  }

  checkNewPassword() {
    if (this.newPassword && this.newPassword.length >= 8) {
      return true;
    }
    return false;
  }

  checkConfirmPassword() {
    if (this.confirmPassword && this.confirmPassword.length >= 8 && this.newPassword && this.newPassword == this.confirmPassword) {
      return true;
    }
    return false;
  }

  checkIsEnabled() {
    if (this.newPassword && this.newPassword.length >= 8 && this.confirmPassword && this.confirmPassword.length >= 8 && this.newPassword == this.confirmPassword) {
      return true;
    }
    return false;
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
      this.errorMessage = this.translate.instant('NEW_PASSWORD.error_length_new_password_message');
      return;
    }

    if(!this.confirmPassword || this.confirmPassword.length < 8){
      this.errorNewPass = false;
      this.errorConfirmPass = true;
      this.errorMessage = this.translate.instant('NEW_PASSWORD.error_length_confirm_password_message');
      return;
    }

    if(this.newPassword != this.confirmPassword){
      this.errorNewPass = true;
      this.errorConfirmPass = true;
      this.errorMessage = this.translate.instant('NEW_PASSWORD.error_not_match_password_message');
      return;
    }

    this.updateAccount();
  }
  
}
