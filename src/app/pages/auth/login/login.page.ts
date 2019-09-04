import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  phone: string;
  password: string;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  checkIsEnabled() {
    console.log(this.phone);
    console.log(this.password);
    if (this.phone && this.phone.length >= 0 && this.password && this.password.length > 0) {
      return true;
    }
    return false;
  }

  login() {
    this.authService.login(this.phone, this.password).subscribe(
      data => {
        this.alertService.presentToast('Logged In');
      },
      error => {
        console.log(error);
      },
      () => {
        this.navCtrl.navigateRoot('/dashboard/home');
      }
    );
  }
}
