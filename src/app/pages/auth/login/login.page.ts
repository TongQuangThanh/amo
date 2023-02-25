import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from '../../../services/loading/loading.service';
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  phone: string;
  password: string;
  errorMessage:string;
  showPassword = false;
  password_type: string = 'password';
  passwordToggleIcon = 'eye-off-outline';

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private loading: LoadingService,
    private apiService: ApiService,
  ) { 
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
  ngOnInit() {
    localStorage.removeItem('token');
    // this.route.queryParams.subscribe(params => {
    //   this.phone = params.phoneNumber;
    // });
    this.phone = this.route.snapshot.paramMap.get('phone');
  }

  checkIsEnabled() {
    if (this.phone && this.phone.length >= 8 && this.password && this.password.length >= 8) {
      return true;
    }
    return false;
  }

  login() {
    var self = this;
    this.loading.present();
    this.navCtrl.navigateRoot('/dashboard/home');
    // this.authService.login(this.phone, this.password).subscribe(
    //   data => {
    //    if (data) {
    //     self.errorMessage = '';
    //     var userId = localStorage.getItem('playID');
    //     if(userId && userId.length > 0){
    //       self.apiService.settingNotification({
    //         playerId: userId
    //       }).subscribe(result => {
    //         console.log("done " + userId)
    //       })
    //     }
    //     this.navCtrl.navigateRoot('/dashboard/home');
    //    }
    //   },
    //   (error:any) => {
    //     self.errorMessage = error.error.message;
    //     self.loading.dismiss();
    //   },
    //   () => {
    //     self.loading.dismiss();
    //   }
    // );
  }

  changeToForgotPass(){
    this.navCtrl.navigateForward('/forgot-password');
  }
}
