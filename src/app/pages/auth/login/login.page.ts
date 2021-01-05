import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform, IonInput } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from '../../../services/loading/loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('inputPhone')  inputPhoneElement: IonInput;

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
    private platform: Platform
  ) { 
    this.platform.keyboardDidShow.subscribe(ev => {
      const { keyboardHeight } = ev;
      // Do something with the keyboard height such as translating an input above the keyboard.
      const login = document.getElementById('login_input');
      const input = document.querySelector('ion-input');
    });
  
    this.platform.keyboardDidHide.subscribe(() => {
      // Move input back to original location
    });
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
    this.authService.login(this.phone, this.password).subscribe(
      data => {
        console.log('Logged In');
      },
      (error:any) => {
        self.errorMessage = error.error.message;
        self.loading.dismiss();
      },
      () => {
        self.loading.dismiss();
        this.navCtrl.navigateRoot('/dashboard/home');
      }
    );
  }

  changeToForgotPass(){
    this.navCtrl.navigateForward('/forgot-password');
  }

  onEnter(){
    this.login();
  }

  onFocusPassword(){
    setTimeout(() => {
      this.inputPhoneElement.setFocus();
 }, 400);
  }
}
